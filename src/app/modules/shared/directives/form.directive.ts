import {Directive} from '@angular/core';
import {FormService} from '../services/form.service';

/**
 * Directive that wraps a form. Offers functionality to mark all the forms controls as touched.
 */
@Directive({
  selector: '[bchForm]',
  providers: [
    FormService
  ]
})
export class FormDirective {

  constructor(private formService: FormService) {
  }

  /**
   * Marksa all registered controls as touched.
   */
  markAsTouched() {
    this.formService.markAsTouched();
  }

}
