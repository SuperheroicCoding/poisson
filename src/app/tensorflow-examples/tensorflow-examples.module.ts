import {NgModule} from '@angular/core';
import {TensorflowExamplesRoutingModule} from './tensorflow-examples-routing.module';
import {PolynominalRegretionComponent} from './polynominal-regretion/polynominal-regretion.component';
import {DataDrawerComponent} from './polynominal-regretion/data-drawer/data-drawer.component';
import {DataGeneratorService} from './polynominal-regretion/data-generator.service';
import {PolynominalRegretionService} from './polynominal-regretion/polynominal-regretion.service';
import {DataDrawerService} from './polynominal-regretion/data-drawer/data-drawer.service';
import {SharedModule} from '../shared/shared.module';
import {LearnedDigitsComponent} from './learned-digits/learned-digits.component';
import {TensorflowExamplesComponent} from './tensorflow-examples.component';
import {MnistDataService} from './learned-digits/mnist-data.service';
import {LearnedDigitsModelService} from './learned-digits/learned-digits-model.service';
import {UiComponent} from './learned-digits/ui/ui.component';
import {HttpClientModule} from '@angular/common/http';
import { DrawDigitComponent } from './learned-digits/draw-digit/draw-digit.component';

@NgModule({
  imports: [
    SharedModule,
    TensorflowExamplesRoutingModule,
    HttpClientModule
  ],
  providers: [DataGeneratorService, PolynominalRegretionService, DataDrawerService, MnistDataService, LearnedDigitsModelService],
  declarations: [PolynominalRegretionComponent, DataDrawerComponent, LearnedDigitsComponent, TensorflowExamplesComponent, UiComponent, DrawDigitComponent]
})
export class TensorflowExamplesModule {
}
