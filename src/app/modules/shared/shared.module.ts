import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IfNoErrorDirective} from './directives/if-no-error.directive';
import {ControlGroupDirective} from './directives/control-group.directive';
import {FormControlDirective} from './directives/form-control.directive';
import {IfErrorDirective} from './directives/if-error.directive';

/**
 * Module that provides shared resources.
 */
@NgModule({
  declarations: [
    IfNoErrorDirective,
    ControlGroupDirective,
    FormControlDirective,
    IfErrorDirective,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    IfNoErrorDirective,
    IfErrorDirective,
    ControlGroupDirective,
    FormControlDirective
  ]
})
export class SharedModule {
}
