import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IfErrorDirective} from './directives/if-error.directive';
import {FormGroupDirective} from './directives/form-group.directive';
import {FormControlDirective} from './directives/form-control.directive';


@NgModule({
  declarations: [
    IfErrorDirective,
    FormGroupDirective,
    FormControlDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    IfErrorDirective,
    FormGroupDirective,
    FormControlDirective
  ]
})
export class SharedModule {
}
