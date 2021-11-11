import {AfterViewInit, ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {ExperimentFormService} from '../../services/experiment-form.service';
import {ClrForm} from '@clr/angular';

/**
 * Form component for experiment reactants.
 */
@Component({
  selector: 'bch-reactants-form',
  templateUrl: './reactants-form.component.html',
  styleUrls: ['./reactants-form.component.scss']
})
export class ReactantsFormComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild(ClrForm, {static: true}) clrForm: ClrForm;

  public form: FormGroup;

  constructor(private experimentFormService: ExperimentFormService,
              private cdr: ChangeDetectorRef) {
  }

  /**
   * Sets the form group by getting it from the experiment form service.
   */
  ngOnInit(): void {
    this.form = this.experimentFormService.getExperimentFormSubGroup('reactants');
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


}
