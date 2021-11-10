import {AfterViewInit, ChangeDetectorRef, Component, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {FormArray, FormGroup} from '@angular/forms';
import {FormDirective} from '../../../shared/directives/form.directive';

@Component({
  selector: 'bch-enzyme-form',
  templateUrl: './enzyme-form.component.html',
  styleUrls: ['./enzyme-form.component.scss']
})
export class EnzymeFormComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild(FormDirective, {static: true}) formDirective: FormDirective;

  @Input() form: FormGroup;


  public units = ['mmol/L', 'mg/L', 'ml'];


  constructor(private cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {

  }

  ngAfterViewInit() {
    if (this.form.touched) {
      this.formDirective.markAsTouched();
      this.cdr.detectChanges();
    }
  }

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
