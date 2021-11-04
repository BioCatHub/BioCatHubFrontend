import {Directive, ElementRef, Input, OnDestroy, OnInit} from '@angular/core';
import {AbstractControl, FormArray, FormControl, FormGroup} from '@angular/forms';
import {Subscription} from 'rxjs';
import {Attribute} from '../../../models/attribute';

/**
 * Directive that counts the number of form controls and sets progress bar values depending on the number of valid
 * controls in relation to the total controls.
 */
@Directive({
  selector: '[bchFormProgress]'
})
export class FormProgressDirective implements OnInit, OnDestroy {

  @Input() bchFormProgress: FormGroup;

  private value = 0;
  private max = 0;
  private valueChangesSubscription: Subscription;

  constructor(private el: ElementRef) {
  }

  /**
   * Sets initial progress and subscribes to value changes of the form to recalculate progress.
   */
  ngOnInit() {
    this.calculateProgress();
    this.valueChangesSubscription = this.bchFormProgress.valueChanges.subscribe(this.calculateProgress.bind(this));
  }

  /**
   * Unsubscribes on destroy.
   */
  ngOnDestroy() {
    this.valueChangesSubscription.unsubscribe();
  }

  /**
   * Calculates the progress and sets it on the element.
   */
  private calculateProgress() {
    this.value = 0;
    this.max = 0;
    this.walkFormGroup(this.bchFormProgress);
    this.setProgress();
  }

  /**
   * Sets the current progress on the progress bar element.
   */
  private setProgress() {
    this.el.nativeElement.setAttribute('value', this.value);
    this.el.nativeElement.setAttribute('max', this.max);
  }

  /**
   * Walks an abstract control and calls the appropriate next function depending on control type.
   *
   * @param control Control to check.
   */
  private walkAbstractControl(control: AbstractControl) {
    if (control instanceof FormGroup) {
      this.walkFormGroup(control);
    }
    if (control instanceof FormArray) {
      this.walkFormArray(control);
    }
    if (control instanceof FormControl) {
      this.walkFormControl(control);
    }
  }

  /**
   * Iterates over all controls of a form group and calls the next walk-functions.
   *
   * @param control Control to check.
   */
  private walkFormGroup(control: FormGroup) {
    Object.values(control.controls).map(abstractControl => {
      this.walkAbstractControl(abstractControl);
    });
  }

  /**
   * Iterates over all controls of a form array and calls the next walk-functions.
   *
   * @param control Control to check.
   */
  private walkFormArray(control: FormArray) {
    control.controls.map(abstractControl => {
      this.walkAbstractControl(abstractControl);
    });
  }

  /**
   * Checks a form control. The max count is incremented by one for every input. If the input is valid, the
   * value count is also increased. Special values like Attributes are seperatly checked as they may have more then
   * one input.
   *
   * @param control Control to check.
   */
  private walkFormControl(control: FormControl) {
    if (control.value instanceof Attribute) {
      this.max += 2;
      if (control.value.key) {
        this.value += 1;
      }
      if (control.value.value) {
        this.value += 1;
      }
    } else {
      this.max += 1;
      if (control.valid) {
        this.value += 1;
      }
    }
  }

}
