import {Directive, ElementRef} from '@angular/core';
import {NgControl} from '@angular/forms';
import {FormControlService} from '../services/form-control.service';
import {fromEvent} from 'rxjs';
import {map} from 'rxjs/operators';

@Directive({
  selector: '[bchFormControl]'
})
export class FormControlDirective {

  constructor(private ngControl: NgControl,
              private el: ElementRef,
              private formControlService: FormControlService) {

    const touchedChanged = fromEvent(this.el.nativeElement, 'blur').pipe(map(() => true));

    this.formControlService.registerControlElement({
      control: this.ngControl,
      touchedChanged,
      name: this.ngControl.name
    });

  }

}
