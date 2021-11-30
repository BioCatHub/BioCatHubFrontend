import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ExperimentEditorComponent} from './components/experiment-editor/experiment-editor.component';
import {BiocatalystFormComponent} from './components/biocatalyst-form/biocatalyst-form.component';
import {ConditionsFormComponent} from './components/conditions-form/conditions-form.component';
import {ExperimentalDataFormComponent} from './components/experimental-data-form/experimental-data-form.component';
import {ReactantsFormComponent} from './components/reactants-form/reactants-form.component';
import {VesselFormComponent} from './components/vessel-form/vessel-form.component';

const routes: Routes = [
  {
    path: '',
    component: ExperimentEditorComponent,
    children: [
      {
        path: 'biocatalyst',
        component: BiocatalystFormComponent,
        data: {
          formGroupName: 'biocatalyst'
        }
      },
      {
        path: 'conditions',
        component: ConditionsFormComponent,
        data: {
          formGroupName: 'conditions'
        }
      },
      {
        path: 'experimental-data',
        component: ExperimentalDataFormComponent,
        data: {
          formGroupName: 'experimentalData'
        }
      },
      {
        path: 'reactants',
        component: ReactantsFormComponent,
        data: {
          formGroupName: 'reactants'
        }
      },
      {
        path: 'vessel',
        component: VesselFormComponent,
        data: {
          formGroupName: 'vessel'
        }
      },
      {
        path: '',
        redirectTo: 'vessel'
      }
    ]
  },
];

/**
 * Router module for the experiment editor.
 */
@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ExperimentEditorRoutingModule {
}
