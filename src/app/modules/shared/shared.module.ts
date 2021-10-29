import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IfNoErrorDirective} from './directives/if-no-error.directive';
import {FormGroupDirective} from './directives/form-group.directive';
import {FormControlDirective} from './directives/form-control.directive';
import {IfErrorDirective} from './directives/if-error.directive';


@NgModule({
  declarations: [
    IfNoErrorDirective,
    FormGroupDirective,
    FormControlDirective,
    IfErrorDirective,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    IfNoErrorDirective,
    IfErrorDirective,
    FormGroupDirective,
    FormControlDirective
  ]
})
export class SharedModule {
}
