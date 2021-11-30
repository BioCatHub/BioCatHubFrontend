import {Component, EventEmitter, forwardRef, Injector, OnInit, Output} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR, NgControl} from '@angular/forms';
import {Attribute} from '../../../../models/attribute';

/**
 * Form component for attributes.
 *
 * NOTE: Currently not implemented: indication of disabled state, as it's not yet needed in BCH.
 */
@Component({
  selector: 'bch-attribute-input',
  templateUrl: './attribute-input.component.html',
  styleUrls: ['./attribute-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AttributeInputComponent),
      multi: true,
    }
  ],
})
export class AttributeInputComponent implements OnInit, ControlValueAccessor {

  /**
   * Emits when the attribute should get removed.
   */
  @Output() removeAttribute: EventEmitter<any> = new EventEmitter<any>();

  public attribute: Attribute;
  public isDisabled = false;
  public formControl: NgControl;

  constructor(private inj: Injector) {
  }

  /**
   * Initializes the component and retrieves the formControl it's used with.
   */
  ngOnInit() {
    this.formControl = this.inj.get(NgControl);
  }

  /**
   * Registers the onChange method for the ControlValueAccessor.
   *
   * @param fn Function to call on change.
   */
  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  /**
   * Not implemented but needed for the interface.
   */
  registerOnTouched(_fn: any): void {
  }


  /**
   * Function is replaced in registerOnChange.
   */
  propagateChange = (_: any) => {
  };

  /**
   * Sets the value.
   *
   * @param attribute: Attribute to write.
   */
  writeValue(attribute: Attribute): void {
    this.attribute = attribute;
  }

  /**
   * Emits internal value when it changes.
   */
  onChange() {
    this.propagateChange(this.attribute);
  }

  /**
   * Sets the disabled state of the component.
   *
   * @param isDisabled Disabled state.
   */
  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

}
