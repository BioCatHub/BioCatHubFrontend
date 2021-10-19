import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ExperimentEditorComponent} from './components/experiment-editor/experiment-editor.component';
import {ExperimentEditorRoutingModule} from './experiment-editor-routing.module';

/**
 * Module that contains the experiment editor.
 */
@NgModule({
  declarations: [
    ExperimentEditorComponent
  ],
  imports: [
    CommonModule,
    ExperimentEditorRoutingModule
  ]
})
export class ExperimentEditorModule {
}
