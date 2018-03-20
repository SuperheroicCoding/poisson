export interface ReactionDiffCalculator {
  grid: Float32Array;
  numberThreads: number;

  reset(): void;

  addChemical(x: number, y: number): void;

  resize(width: number, height: number): void;

  updateNumberThreads(numberWebWorkers: number): void;

  calcNext(): void;
}