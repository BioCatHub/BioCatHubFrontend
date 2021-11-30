import {AfterViewInit, ChangeDetectorRef, Component, Input, ViewEncapsulation} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {environment} from 'src/environments/environment';

/**
 * Form component for reactants.
 */
@Component({
  selector: 'bch-reactant-form',
  templateUrl: './reactant-form.component.html',
  styleUrls: ['./reactant-form.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ReactantFormComponent implements AfterViewInit {

  @Input() form: FormGroup;

  roles = ['substrate', 'product'];
  units = ['g/L', 'mmol/L'];
  environment = environment;

  constructor(private cdr: ChangeDetectorRef) {
  }

  /**
   * Makes sure the progress bar shows the correct value.
   */
  ngAfterViewInit() {
    this.cdr.detectChanges();
  }

}
