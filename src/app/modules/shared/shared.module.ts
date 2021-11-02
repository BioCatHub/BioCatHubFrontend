import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IfNoErrorDirective} from './directives/if-no-error.directive';
import {ControlGroupDirective} from './directives/control-group.directive';
import {FormControlDirective} from './directives/form-control.directive';
import {IfErrorDirective} from './directives/if-error.directive';
import {AttributeInputComponent} from './components/attribute-input/attribute-input.component';
import {CdsModule} from '@cds/angular';
import {FormsModule} from '@angular/forms';
import {AddAttributeDropdownComponent} from './components/add-attribute-dropdown/add-attribute-dropdown.component';
import {ClarityModule} from '@clr/angular';
import {FormDirective} from './directives/form.directive';

/**
 * Module that provides shared resources.
 */
@NgModule({
  declarations: [
    IfNoErrorDirective,
    ControlGroupDirective,
    FormControlDirective,
    IfErrorDirective,
    AttributeInputComponent,
    AddAttributeDropdownComponent,
    FormDirective,
  ],
  imports: [
    CommonModule,
    CdsModule,
    FormsModule,
    ClarityModule
  ],
  exports: [
    IfNoErrorDirective,
    IfErrorDirective,
    ControlGroupDirective,
    FormControlDirective,
    AttributeInputComponent,
    AddAttributeDropdownComponent,
    FormDirective
  ]
})
export class SharedModule {
}
