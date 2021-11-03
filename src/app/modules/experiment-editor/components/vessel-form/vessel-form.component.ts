import {AfterViewInit, ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ExperimentFormService} from '../../services/experiment-form.service';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';
import {FormDirective} from '../../../shared/directives/form.directive';

@Component({
  selector: 'bch-vessel-form',
  templateUrl: './vessel-form.component.html',
  styleUrls: ['./vessel-form.component.scss']
})
export class VesselFormComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild(FormDirective, {static: true}) formDirective: FormDirective;

  public form: FormGroup;
  public units = ['ml', 'µL', 'L', 'm³'];

  constructor(private experimentFormService: ExperimentFormService,
              private fb: FormBuilder,
              private cdr: ChangeDetectorRef) {
  }

  /**
   * Sets the form group by getting it from the experiment form service.
   */
  ngOnInit(): void {
    this.form = this.experimentFormService.getExperimentFormSubGroup('vessel');
  }

  /**
   * When the form is rendered at least the second time, it's form control statuses can be touched and invalid.
   * In this case we need to mark the UI as touched.
   */
  ngAfterViewInit() {
    if (this.form.touched) {
      this.formDirective.markAsTouched();
      this.cdr.detectChanges();
    }
  }

  /**
   * When we navigate away, we want the form to compute it's validity status. This way it sends an event through
   * statusChanges and the timeline step directive can update the timeline status.
   */
  ngOnDestroy() {
    this.form.markAllAsTouched();
    this.form.updateValueAndValidity();
  }

  /**
   * Returns the attributes form array.
   */
  attributes(): FormArray {
    return this.form.get('attributes') as FormArray;
  }

  /**
   * Removes the attribute with the given index.
   *
   * @param i Index to remove the attribute at.
   */
  removeAttribute(i: number) {
    (this.form.get('attributes') as FormArray).removeAt(i);
  }

}
