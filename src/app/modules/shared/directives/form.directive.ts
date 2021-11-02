import {Directive} from '@angular/core';
import {FormService} from '../services/form.service';

@Directive({
  selector: '[bchForm]',
  providers: [
    FormService
  ]
})
export class FormDirective {

  constructor(private formService: FormService) {
  }

  markAsTouched() {
    this.formService.markAsTouched();
  }

}
