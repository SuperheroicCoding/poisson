import {Injectable} from '@angular/core';
import {DataGeneratorService} from './data-generator.service';
import * as tf from '@tensorflow/tfjs';

/**
 * We want to learn the coefficients that give correct solutions to the
 * following quadratic equation:
 *      y = a * x^3 + b * x^2 + c * x + d
 * In other words we want to learn values for:
 *      a
 *      b
 *      c
 *      d
 * Such that this function produces 'desired outputs' for y when provided
 * with x. We will provide some examples of 'xs' and 'ys' to allow this model
 * to learn what we mean by desired outputs and then use it to produce new
 * values of y that fit the curve implied by our example.
 */
@Injectable()
export class PolynominalRegretionService {

  private a: tf.Variable<tf.Rank.R0>;
  private b: tf.Variable<tf.Rank.R0>;
  private c: tf.Variable<tf.Rank.R0>;
  private d: tf.Variable<tf.Rank.R0>;
  private numIterations: number;
  private optimizer: tf.SGDOptimizer;

  private _trueCoefficients: { a: number; b: number; c: number; d: number };
  private _trainingData: any;

  predictionsBefore: tf.Tensor;
  predictionsAfter: tf.Tensor;
  currentLoss: tf.Scalar;

  constructor(private dataService: DataGeneratorService) {
    this.setPolynominal();
    this.createOptimizer();
  }

  set trueCoefficients(coefficients) {
    this._trueCoefficients = coefficients;
    this.trainingData = null;
    this.predictionsBefore = this.predict(this.trainingData.xs);
    this.predictionsAfter = null;
  }

  get trueCoefficients() {
    if (!this._trueCoefficients) {
      this._trueCoefficients = {a: -.8, b: -.2, c: .9, d: .5};
    }
    return this._trueCoefficients;
  }

  set trainingData(coefficients) {
    this._trainingData = coefficients;
  }

  get trainingData() {
    if (!this._trainingData) {
      this._trainingData = this.dataService.generateData(400, this.trueCoefficients);
    }
    return this._trainingData;
  }

  setPolynominal(a: number = Math.random(), b: number = Math.random(), c: number = Math.random(), d: number = Math.random()) {
    this.a = tf.variable(tf.scalar(a, 'float32'));
    this.b = tf.variable(tf.scalar(b, 'float32'));
    this.c = tf.variable(tf.scalar(c, 'float32'));
    this.d = tf.variable(tf.scalar(d, 'float32'));
  }

  // Step 2. Create an optimizer, we will use this later. You can play
  // with some of these values to see how the model perfoms.
  createOptimizer(numIterations = 75, learningRate = 0.5) {
    this.numIterations = numIterations;
    this.optimizer = tf.train.sgd(learningRate);
  }

  /*
 * This function represents our 'model'. Given an input 'x' it will try and
 * predict the appropriate output 'y'.
 *
 * It is also sometimes referred to as the 'forward' step of our training
 * process. Though we will use the same function for predictions later.
 *
 * @return number predicted y value
 */
  private predict(x) {
    // y = a * x ^ 3 + b * x ^ 2 + c * x + d
    return tf.tidy(() => {
      return this.a.mul(x.pow(tf.scalar(3, 'int32')))
        .add(this.b.mul(x.square()))
        .add(this.c.mul(x))
        .add(this.d as tf.Tensor);
    }) as any;
  }

  loss(prediction: tf.Tensor, labels: tf.Tensor): tf.Tensor<tf.Rank.R0> {
    // Having a good error function is key for training a machine learning model
    return prediction.sub(labels).square().mean() as tf.Tensor<tf.Rank.R0>;
  }

  /*
 * This will iteratively train our model.
 *
 * xs - training data x values
 * ys — training data y values
 */
  async train(xs, ys, numIterations = this.numIterations) {
    for (let iter = 0; iter < numIterations; iter++) {
      // optimizer.minimize is where the training happens.

      // The function it takes must return a numerical estimate (i.e. loss)
      // of how well we are doing using the current state of
      // the variables we created at the start.

      // This optimizer does the 'backward' step of our training process
      // updating variables defined previously in order to minimize the
      // loss.
      this.optimizer.minimize(() => {
        // Feed the examples into the model
        const prediction = this.predict(xs);
        return this.loss(prediction, ys) as tf.Scalar;
      });

      // Use tf.nextFrame to not block the browser.
      await tf.nextFrame();
    }
  }

  get currentCoefficients(): { a: number, b: number, c: number, d: number } {
    return Object.assign({},
      {
        a: this.a.dataSync()[0],
        b: this.b.dataSync()[0],
        c: this.c.dataSync()[0],
        d: this.d.dataSync()[0]
      });
  }

  async learnCoefficients(iterations = this.numIterations, batchSize = 10) {
    // Train the model!
    for (let i = iterations; i > 0; i -= batchSize) {
      await this.train(this.trainingData.xs, this.trainingData.ys, Math.min(batchSize, i));
      this.predictionsAfter = this.predict(this.trainingData.xs);
    }
  }
}