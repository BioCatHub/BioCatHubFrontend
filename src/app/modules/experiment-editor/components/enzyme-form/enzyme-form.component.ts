import {AfterViewInit, ChangeDetectorRef, Component, Input, OnDestroy, ViewChild} from '@angular/core';
import {FormArray, FormGroup} from '@angular/forms';
import {FormDirective} from '../../../shared/directives/form.directive';

/**
 * Form component for editing an enzyme.
 */
@Component({
  selector: 'bch-enzyme-form',
  templateUrl: './enzyme-form.component.html',
  styleUrls: ['./enzyme-form.component.scss']
})
export class EnzymeFormComponent implements AfterViewInit, OnDestroy {

  @ViewChild(FormDirective, {static: true}) formDirective: FormDirective;

  @Input() form: FormGroup;

  public units = ['mmol/L', 'mg/L', 'ml'];

  constructor(private cdr: ChangeDetectorRef) {
  }

  /**
   * Handles form validation after the component is rendered.
   */
  ngAfterViewInit() {
    if (this.form.touched) {
      this.formDirective.markAsTouched();
      this.cdr.detectChanges();
    }
  }

  /**
   * Marks the form as touched after the form is closed (= component is destroyed).
   */
  ngOnDestroy() {
    this.form.markAllAsTouched();
    this.form.parent?.markAsTouched();
  }

  /**
   * Returns the others form array.
   */
  others(formGroup: FormGroup): FormArray {
    return formGroup.get('others') as FormArray;
  }

  /**
   * Removes the attribute with the given index.
   *
   * @param i Index to remove the attribute at.
   */
  removeAttribute(i: number) {
    (this.form.get('others') as FormArray).removeAt(i);
  }

}
