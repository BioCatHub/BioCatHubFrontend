import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'bch-reactant-form',
  templateUrl: './reactant-form.component.html',
  styleUrls: ['./reactant-form.component.scss']
})
export class ReactantFormComponent implements OnInit {

  @Input() form: FormGroup;

  roles = ['Substrate', 'Product'];
  units = ['g/L', 'mmol/L'];

  constructor() {
  }

  ngOnInit(): void {
  }

}
