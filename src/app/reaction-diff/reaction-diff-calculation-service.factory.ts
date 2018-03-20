import {Injectable} from '@angular/core';
import {ReactionDiffCalculator} from './reaction-diff-calculator';
import {ReactionDiffConfigService} from './reaction-diff-config.service';
import {ReactionDiffGpuCalcService} from './reaction-diff-gpu-calc.service';
import {ReactionDiffWorkerCalcService} from './reaction-diff-worker-calc.service';
import {GpuJsService} from './gpujs.service';
import {ColorMapperService} from './color-mapper.service';

@Injectable()
export class ReactionDiffCalcServiceFactory {
  lastCalcService: ReactionDiffCalculator;

  constructor(private configService: ReactionDiffConfigService, private gpuJsService: GpuJsService, private colorMapper: ColorMapperService) {
  }

  public createCalcService(width: number, height: number, useGpuJs: boolean = true) {
    if (useGpuJs) {
      this.lastCalcService = new ReactionDiffGpuCalcService(
        width, height,
        this.configService.calcParams$,
        this.configService.calcCellWeights$,
        this.configService.addChemicalRadius$, this.configService.speed$, this.gpuJsService, this.colorMapper
      );
    } else {
      this.lastCalcService = new ReactionDiffWorkerCalcService(
        width,
        height,
        this.configService.calcParams$,
        this.configService.calcCellWeights$,
        this.configService.addChemicalRadius$,
        this.colorMapper
      );
    }
    return this.lastCalcService;
  }
}