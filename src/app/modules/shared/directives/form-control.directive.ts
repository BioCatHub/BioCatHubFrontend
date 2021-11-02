import {Directive, ElementRef} from '@angular/core';
import {NgControl} from '@angular/forms';
import {fromEvent, Subject} from 'rxjs';
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
    // Create an Observable that emits on blur events and when manually triggered
    const touchedChangedSubject = new Subject<boolean>();
    fromEvent(this.el.nativeElement, 'blur').subscribe(() => touchedChangedSubject.next(true));
    const touchedChanged = touchedChangedSubject.asObservable();
    // Register control on the ControlGroupService
    this.controlGroupService.registerControlElement({
      control: this.ngControl,
      touchedChanged,
      touchedChangedSubject,
      name: this.ngControl.name
    });
  }

}
