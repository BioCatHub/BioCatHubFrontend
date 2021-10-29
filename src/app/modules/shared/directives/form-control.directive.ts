import {Directive, ElementRef} from '@angular/core';
import {NgControl} from '@angular/forms';
import {fromEvent} from 'rxjs';
import {map} from 'rxjs/operators';
import {ControlGroupService} from '../services/control-group.service';

/**
 * A directive that is responsible for watching the touched state of a form control and for registering
 * an NgControl as ControlElement to the ControlGroupService.
 */
@Directive({
  selector: '[bchFormControl]'
})
export class FormControlDirective {

  constructor(private ngControl: NgControl,
              private el: ElementRef,
              private controlGroupService: ControlGroupService) {
    // Create an Observable stream from the native blur event of the element
    const touchedChanged = fromEvent(this.el.nativeElement, 'blur').pipe(map(() => true));
    // Register control on the ControlGroupService
    this.controlGroupService.registerControlElement({
      control: this.ngControl,
      touchedChanged,
      name: this.ngControl.name
    });
  }

}
