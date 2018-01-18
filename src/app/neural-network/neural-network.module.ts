import {NgModule} from '@angular/core';

import {NeuralNetworkRoutingModule} from './neural-network-routing.module';
import {SharedModule} from '../shared/shared.module';
import {NeuralNetworkComponent} from './neural-network.component';
import {BrainService} from './brain.service';
import {TrainDataService} from './train-data.service';
import {PerceptronComponent} from './perceptron/perceptron.component';
import {DataViewComponent} from './data-view/data-view.component';
import { MultiPerceptronComponent } from './multi-perceptron/multi-perceptron.component';

@NgModule({
  imports: [
    SharedModule,
    NeuralNetworkRoutingModule
  ],
  declarations: [NeuralNetworkComponent, PerceptronComponent, DataViewComponent, MultiPerceptronComponent],
  providers: [BrainService, TrainDataService]
})
export class NeuralNetworkModule {
}
