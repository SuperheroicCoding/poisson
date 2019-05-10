import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Angulartics2Module} from 'angulartics2';
import {ScThanosModule} from 'sc-thanos';
import {RaiseCardDirective} from './raise-card.directive';
import 'hammerjs';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import {SafeHtmlPipe} from './safe-html.pipe';
import {AceEditorModule} from 'ng2-ace-editor';
import {CodeEditorComponent} from './code-editor/code-editor.component';
import {RenderShaderComponent} from './render-shader/render-shader.component';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  imports: [CommonModule, AceEditorModule],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatToolbarModule,
    MatTooltipModule,
    MatIconModule,
    MatCardModule,
    MatDialogModule,
    MatListModule,
    MatSelectModule,
    MatSidenavModule,
    MatGridListModule,
    MatSlideToggleModule,
    MatTabsModule,
    MatSliderModule,
    MatChipsModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    RaiseCardDirective,
    SafeHtmlPipe,
    AceEditorModule,
    CodeEditorComponent,
    RenderShaderComponent,
    FlexLayoutModule,
    Angulartics2Module,
    ScThanosModule
  ],
  declarations: [RaiseCardDirective, SafeHtmlPipe, CodeEditorComponent, RenderShaderComponent]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [],
    };
  }
}