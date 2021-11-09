import {Injectable} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

/**
 * Service that manages the experiment form.
 */
@Injectable()
export class ExperimentFormService {

  private _experimentForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.buildForm();
  }

  /**
   * Builds the form base. The concrete form controls are added by the five form components.
   */
  buildForm() {
    this._experimentForm = this.fb.group({
      biocatalyst: this.fb.group({
        enzymes: this.fb.array([])
      }),
      conditions: this.fb.group({
        test: ['', [Validators.required]]
      }),
      experimentalData: this.fb.group({
        test: ['', [Validators.required]]
      }),
      reactants: this.fb.group({
        test: ['', [Validators.required]]
      }),
      vessel: this.fb.group({
        type: ['', [Validators.required]],
        volume: ['', [Validators.required]], // TODO validate number
        unit: ['', [Validators.required]],
        attributes: this.fb.array([])
      })
    });
  }

  /**
   * Returns the form sub group for the given group name.
   *
   * @param groupName Name of the group that should get returned.
   */
  getExperimentFormSubGroup(groupName: string): FormGroup {
    return this._experimentForm.get(groupName) as FormGroup;
  }

}
