/**
 * Validator for float numbers with dot as decimal separator.
 *
 * @return Validator function for numbers.
 */
import {AbstractControl, ValidatorFn} from '@angular/forms';

export const floatValidator = (): ValidatorFn => (ctrl: AbstractControl): { [key: string]: any } | null => {
  if (ctrl.value === null || ctrl.value === '') {
    return null;
  }
  const regexp = new RegExp(/^[0-9]*(\.|,)?[0-9]*$/);
  return (regexp.test(ctrl.value)) ? null : {float: true};
};
