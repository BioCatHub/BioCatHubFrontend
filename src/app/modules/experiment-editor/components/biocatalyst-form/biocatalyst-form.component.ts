import {AfterViewInit, ChangeDetectorRef, Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ExperimentFormService} from '../../services/experiment-form.service';


// TODO Add validation
// TODO Add validation indicators to datagrid
// TODO Add brenda search
// TODO try to refactor attribute stuff

/**
 * Form component for biocatalysts. Offers a datagrid in which you can add different enzymes.
 */
@Component({
  selector: 'bch-biocatalyst-form',
  templateUrl: './biocatalyst-form.component.html',
  styleUrls: ['./biocatalyst-form.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BiocatalystFormComponent implements OnInit, AfterViewInit, OnDestroy {


  public form: FormGroup;
  public detailEnzyme: FormGroup | null;


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
      // this.formDirective.markAsTouched();
      // this.cdr.detectChanges();
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
   * Adds a new enzyme form group to the array.
   */
  addEnzyme() {
    const enzymeGroup = this.fb.group({
      name: [null, [Validators.required]],
      organism: [],
      variant: [],
      type: ['Wildtype'],
      sequence: [],
      concentration: [],
      unit: ['mmol/L'],
      method: [],
      others: this.fb.array([]),
    });
    (this.form.get('enzymes') as FormArray).push(enzymeGroup);
    this.detailEnzyme = null; // TODO Why is this needed?
    this.cdr.detectChanges();
    this.detailEnzyme = enzymeGroup;
    this.cdr.detectChanges();
  }


  onDetailOpen(event: any) {
  }

}
