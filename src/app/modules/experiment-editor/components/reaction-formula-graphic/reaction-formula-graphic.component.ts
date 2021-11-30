import {Component, Input} from '@angular/core';
import {FormArray, FormGroup} from '@angular/forms';

@Component({
  selector: 'bch-reaction-formula-graphic',
  templateUrl: './reaction-formula-graphic.component.html',
  styleUrls: ['./reaction-formula-graphic.component.scss']
})
export class ReactionFormulaGraphicComponent {

  @Input() form: FormGroup;

  getReactantsCount(): number {
    return (this.form.get('reactants') as FormArray).controls.length;
  }

  getSubstrates(): string[] {
    const substrates: string[] = [];
    (this.form.get('reactants') as FormArray).controls.map(control => {
      if (control.get('role')?.value === 'substrate') {
        substrates.push('http://127.0.0.1:5000/' + control.get('smiles')?.value);
      }
    });
    return substrates;
  }

  getProducts(): string[] {
    const products: string[] = [];
    (this.form.get('reactants') as FormArray).controls.map(control => {
      if (control.get('role')?.value === 'product') {
        products.push('http://127.0.0.1:5000/' + control.get('smiles')?.value);
      }
    });
    return products;
  }

}
