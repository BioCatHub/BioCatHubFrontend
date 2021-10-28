import {Directive} from '@angular/core';
import {FormControlService} from '../services/form-control.service';

@Directive({
  selector: '[bchFormGroup]',
  providers: [
    FormControlService
  ]
})
export class FormGroupDirective {

  constructor() {
  }

}
