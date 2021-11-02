import {Component, forwardRef, Injector, OnInit} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR, NgControl} from '@angular/forms';
import {Attribute} from '../../../../models/attribute';

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
   * Used by the formControl to write a value to the native formControl or any custom value. todo
   *
   * @param obj: Value to write.
   */
  writeValue(obj: Attribute): void {
    this.attribute = obj;
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
