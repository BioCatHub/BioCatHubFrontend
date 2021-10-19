import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ExperimentEditorComponent} from './components/experiment-editor/experiment-editor.component';

const routes: Routes = [
  {
    path: '',
    component: ExperimentEditorComponent
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
