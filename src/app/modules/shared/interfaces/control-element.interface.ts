import {NgControl} from '@angular/forms';
import {Observable} from 'rxjs';

export interface ControlElement {
  control: NgControl;
  touchedChanged: Observable<boolean>;
  name: string | number | null;
}
