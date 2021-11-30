import {Component, Input} from '@angular/core';
import {FormArray, FormGroup} from '@angular/forms';
import {environment} from '../../../../../environments/environment';

/**
 * Component that shows the reaction formula for the reaction that is defined in the input form.
 */
@Component({
  selector: 'bch-reaction-formula-graphic',
  templateUrl: './reaction-formula-graphic.component.html',
  styleUrls: ['./reaction-formula-graphic.component.scss']
})
export class ReactionFormulaGraphicComponent {

  @Input() form: FormGroup;

  /**
   * Return the number of reactants in the reaction.
   */
  getReactantsCount(): number {
    return (this.form.get('reactants') as FormArray).controls.length;
  }

  /**
   * Returns the image paths of all substrates in the reaction.
   */
  getSubstrateImagePaths(): string[] {
    const substrates: string[] = [];
    (this.form.get('reactants') as FormArray).controls.map(control => {
      if (control.get('role')?.value === 'substrate') {
        substrates.push(environment.bchSmilesToStructurePath + control.get('smiles')?.value);
      }
    });
    return substrates;
  }

  /**
   * Returns the image paths of all products in the reaction.
   */
  getProductImagePaths(): string[] {
    const products: string[] = [];
    (this.form.get('reactants') as FormArray).controls.map(control => {
      if (control.get('role')?.value === 'product') {
        products.push(environment.bchSmilesToStructurePath + control.get('smiles')?.value);
      }
    });
    return products;
  }

}
