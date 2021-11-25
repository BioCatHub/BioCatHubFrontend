import {Component, Input, OnInit} from '@angular/core';
import {FormArray, FormGroup} from '@angular/forms';

@Component({
  selector: 'bch-reaction-formula-graphic',
  templateUrl: './reaction-formula-graphic.component.html',
  styleUrls: ['./reaction-formula-graphic.component.scss']
})
export class ReactionFormulaGraphicComponent implements OnInit {

  @Input() form: FormGroup;

  constructor() {
  }

  ngOnInit(): void {
  }

  getSubstrates(): string[] {
    const substrates: string[] = [];
    (this.form.get('reactants') as FormArray).controls.map(control => {
      if (control.get('role')?.value === 'substrate') {
        substrates.push(control.get('imageUrl')?.value);
      }
    });
    return substrates;
  }

  getProducts(): string[] {
    const products: string[] = [];
    (this.form.get('reactants') as FormArray).controls.map(control => {
      if (control.get('role')?.value === 'product') {
        products.push(control.get('imageUrl')?.value);
      }
    });
    return products;
  }

}
