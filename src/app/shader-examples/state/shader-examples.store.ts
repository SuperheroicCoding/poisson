import {Injectable} from '@angular/core';
import {Store, StoreConfig} from '@datorama/akita';
import {PageEvent} from '@angular/material';
import {ShaderCode} from './shader-code.model';

export abstract class ShaderExampleState {
  showFps: boolean;
  showCodeEditor: boolean;
  currentPage: PageEvent;
  isSmallScreen: boolean;
  pagedShaders: ShaderCode[];
  animationState: '' | 'fadeOutRight' | 'fadeOutLeft';
}

export function createInitialShaderExampleState(): ShaderExampleState {
  return {
    showFps: false,
    showCodeEditor: false,
    isSmallScreen: false,
    currentPage: {
      length: 0,
      pageIndex: 0,
      pageSize: 2
    },
    pagedShaders: [],
    animationState: ''
  };
}

@Injectable({providedIn: 'root'})
@StoreConfig({name: 'shader-examples'})
export class ShaderExamplesUIStore extends Store<ShaderExampleState> {

  constructor() {
    super(createInitialShaderExampleState());
  }

}
