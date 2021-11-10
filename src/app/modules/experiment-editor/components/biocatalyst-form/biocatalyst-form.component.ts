import {AfterViewInit, ChangeDetectorRef, Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ExperimentFormService} from '../../services/experiment-form.service';
import {Enzyme} from '../../../../models/enzyme';

// TODO add progress bars
// TODO try to refactor attribute stuff
// TODO Add missing documentation & refactor stuff

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
      // this.formDirective.markAsTouched(); todo
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
      organism: [null, [Validators.required]],
      variant: [],
      type: ['Wildtype', [Validators.required]],
      sequence: [null, [Validators.required]],
      concentration: [null, [Validators.required]], // TODO number validator
      unit: ['mmol/L', [Validators.required]],
      method: [],
      others: this.fb.array([]),
      ecNumber: [],
    });
    (this.form.get('enzymes') as FormArray).push(enzymeGroup);
    this.detailEnzyme = null; // TODO Why is this needed?
    this.cdr.detectChanges();
    this.detailEnzyme = enzymeGroup;
    this.cdr.detectChanges();
  }


  selectEnzymeFromSearch(enzyme: Enzyme) {
    this.detailEnzyme?.get('name')?.setValue(enzyme.name);
    this.detailEnzyme?.get('ecNumber')?.setValue(enzyme.ecNumber);
    this.detailEnzyme?.get('organism')?.setValue(null);
    this.detailEnzyme?.get('variant')?.setValue(null);
    this.detailEnzyme?.get('type')?.setValue('Wildtype');
    this.detailEnzyme?.get('sequence')?.setValue(null);
    this.detailEnzyme?.get('concentration')?.setValue(null);
    this.detailEnzyme?.get('unit')?.setValue('mmol/L');
    this.detailEnzyme?.get('method')?.setValue(null);
    (this.detailEnzyme?.get('others') as FormArray).clear();
  }

  /**
   * Deletes the enzyme from the form array.
   * TODO raises an experssionhaschanged error
   * TODO style button
   *
   * @param enzyme Enzyme to delete.
   */
  deleteEnzyme(enzyme: FormGroup) {
    for (let i = 0; i < this.enzymes().length; i++) {
      if (this.enzymes().at(i) === enzyme) {
        this.enzymes().removeAt(i);
        break;
      }
    }
  }

}
