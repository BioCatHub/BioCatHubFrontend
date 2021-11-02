import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormBuilder, FormControl} from '@angular/forms';
import {Attribute} from '../../../../models/attribute';

/**
 * A dropdown menu button for adding new attribute FormControls to the attributes form array in several places of the
 * app.
 */
@Component({
  selector: 'bch-add-attribute-dropdown',
  templateUrl: './add-attribute-dropdown.component.html',
  styleUrls: ['./add-attribute-dropdown.component.scss']
})
export class AddAttributeDropdownComponent {

  /**
   * The available keys to use as template in the dropdown.
   */
  @Input() attributeKeys: string[];

  /**
   * Emits a FormControl with an Attribute value when a button in the dropdown is clicked.
   */
  @Output() addAttribute: EventEmitter<FormControl> = new EventEmitter<FormControl>();

  constructor(private fb: FormBuilder) {
  }

  /**
   * Emits a FormControl with an Attribute as value via the addAttribute output. The attribute has the given key string
   * as key.
   * @param key Key of the attribute.
   */
  emitAttribute(key: string) {
    const attribute = new Attribute();
    attribute.key = key;
    this.addAttribute.emit(this.fb.control(attribute));
  }

}
