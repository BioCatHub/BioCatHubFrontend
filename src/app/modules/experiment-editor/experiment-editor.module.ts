import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ExperimentEditorComponent} from './components/experiment-editor/experiment-editor.component';
import {ExperimentEditorRoutingModule} from './experiment-editor-routing.module';
import {ExperimentalDataFormComponent} from './components/experimental-data-form/experimental-data-form.component';
import {ConditionsFormComponent} from './components/conditions-form/conditions-form.component';
import {ReactantsFormComponent} from './components/reactants-form/reactants-form.component';
import {BiocatalystFormComponent} from './components/biocatalyst-form/biocatalyst-form.component';
import {VesselFormComponent} from './components/vessel-form/vessel-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ExperimentFormService} from './services/experiment-form.service';
import {ClarityModule} from '@clr/angular';
import {TimelineFormStatePipe} from './pipes/timeline-form-state.pipe';

/**
 * Module that contains the experiment editor.
 */
@NgModule({
  declarations: [
    ExperimentEditorComponent,
    ExperimentalDataFormComponent,
    ConditionsFormComponent,
    ReactantsFormComponent,
    BiocatalystFormComponent,
    VesselFormComponent,
    TimelineFormStatePipe
  ],
  imports: [
    CommonModule,
    ExperimentEditorRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ClarityModule
  ],
  providers: [
    ExperimentFormService
  ]
})
export class ExperimentEditorModule {
}
