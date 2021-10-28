import {Injectable} from '@angular/core';
import {NgControl} from '@angular/forms';
import {ControlElement} from '../interfaces/control-element.interface';
import {Observable} from 'rxjs';

@Injectable()
export class FormControlService {

  private controlElements: { [key: string]: ControlElement } = {};

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


}
