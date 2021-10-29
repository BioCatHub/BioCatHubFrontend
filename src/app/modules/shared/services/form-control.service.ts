import {Injectable} from '@angular/core';
import {NgControl} from '@angular/forms';
import {ControlElement} from '../interfaces/control-element.interface';
import {Observable, Subject} from 'rxjs';

// TODO rename

@Injectable()
export class FormControlService {

  private controlElements: { [key: string]: ControlElement } = {};
  private hasErrorSubject: Subject<boolean> = new Subject<boolean>();

  public registerControlElement(controlElement: ControlElement) {
    if (typeof controlElement.name === 'string') {
      this.controlElements[controlElement.name] = controlElement;
    }
  }

  public controlElementTouchedChanges(name: string): Observable<boolean> {
    return this.controlElements[name].touchedChanged;
  }

  public getControl(name: string): NgControl {
    return this.controlElements[name].control;
  }

  public onErrorStateChange() {
    let hasError = false;
    Object.values(this.controlElements).map(controlElement => {
      hasError = hasError || !!controlElement.control.invalid;
    });
    this.hasErrorSubject.next(hasError);
  }

  public get hasError(): Observable<boolean> {
    return this.hasErrorSubject.asObservable();
  }


}
