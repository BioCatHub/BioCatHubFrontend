import {Component, Input} from '@angular/core';
import {FormGroup} from '@angular/forms';

/**
 * Form component for reactants.
 */
@Component({
  selector: 'bch-reactant-form',
  templateUrl: './reactant-form.component.html',
  styleUrls: ['./reactant-form.component.scss']
})
export class ReactantFormComponent {

  @Input() form: FormGroup;

  roles = ['substrate', 'product'];
  units = ['g/L', 'mmol/L'];

}
