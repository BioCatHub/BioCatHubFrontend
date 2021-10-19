import {Injectable} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

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
      biocatalyst: {},
      conditions: {},
      experimentalData: {},
      reactants: {},
      vessel: {},
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
