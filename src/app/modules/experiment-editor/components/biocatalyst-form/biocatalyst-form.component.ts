import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';
import {ExperimentFormService} from '../../services/experiment-form.service';
import {ClrForm} from '@clr/angular';


// TODO Handle markAsTouched
// TODO Add validation
// TODO Add validation indicators to datagrid
// TODO Add brenda search
// TODO conditionally hide variant input
// TODO add missing documentation
// TODO try to refactor attribute stuff

@Component({
  selector: 'bch-biocatalyst-form',
  templateUrl: './biocatalyst-form.component.html',
  styleUrls: ['./biocatalyst-form.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BiocatalystFormComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild(ClrForm, {static: true}) clrForm: ClrForm;

  public form: FormGroup;
  public detailEnzyme: FormGroup;
  public units = ['ml', 'µL', 'L'];


  constructor(private experimentFormService: ExperimentFormService,
              private fb: FormBuilder,
              private cdr: ChangeDetectorRef) {
  }

  /**
   * Sets the form group by getting it from the experiment form service.
   */
  ngOnInit(): void {
    this.form = this.experimentFormService.getExperimentFormSubGroup('biocatalyst');
  }

  /**
   * When the form is rendered at least the second time, it's form control statuses can be touched and invalid.
   * In this case we need to mark the UI as touched.
   */
  ngAfterViewInit() {
    if (this.form.touched) {
      this.clrForm.markAsTouched();
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
   * Returns the enzymes form array.
   */
  enzymes(): FormArray {
    return this.form.get('enzymes') as FormArray;
  }

  /**
   * Returns the others form array.
   */
  others(formGroup: FormGroup): FormArray {
    return formGroup.get('others') as FormArray;
  }

  addEnzyme() {
    const enzymeGroup = this.fb.group({
      name: [],
      organism: [],
      variant: [],
      type: [],
      sequence: [],
      concentration: [],
      unit: [],
      method: [],
      others: this.fb.array([]),
    });
    (this.form.get('enzymes') as FormArray).push(enzymeGroup);
    this.detailEnzyme = enzymeGroup;
    this.cdr.detectChanges();
  }

  /**
   * Removes the attribute with the given index.
   *
   * @param i Index to remove the attribute at.
   */
  removeAttribute(i: number, formGroup: FormGroup) {
    (formGroup.get('others') as FormArray).removeAt(i);
  }

}
