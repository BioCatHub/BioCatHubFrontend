import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

/**
 * A component that either shows `parameter` or `ifNotSet` if parameter is null or undefined.
 */
@Component({
  selector: 'bch-optional-parameter',
  templateUrl: './optional-parameter.component.html',
  styleUrls: ['./optional-parameter.component.scss']
})
export class OptionalParameterComponent implements OnInit, OnChanges {

  @Input() parameter: any;
  @Input() ifNotSet = '-';

  public parameterIsSet = false;

  /**
   * Checks if the parameter is set when it changes.
   */
  ngOnChanges(_changes: SimpleChanges): void {
    this.checkParameterIsSet();
  }

  /**
   * Checks if the parameter is set on component initialization.
   */
  ngOnInit(): void {
    this.checkParameterIsSet();
  }

  /**
   * Checks if the parameter is set.
   */
  checkParameterIsSet() {
    this.parameterIsSet = this.parameter !== '' && this.parameter !== null && typeof this.parameter !== 'undefined';
  }


}
