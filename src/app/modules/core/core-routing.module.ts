import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LandingComponent} from './components/landing/landing.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent
  }
];

/**
 * Core routing module. Defines the top level routes of the application.
 */
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
