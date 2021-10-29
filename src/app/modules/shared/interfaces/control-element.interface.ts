import {NgControl} from '@angular/forms';
import {Observable} from 'rxjs';

/**
 * Properties of a control element for registering it on the ControlGroupService.
 */
export interface ControlElement {
  control: NgControl; // Native Angular control
  touchedChanged: Observable<boolean>; // Stream that emits when the touched state of the element changes
  name: string | number | null; // Name of the control (most of the times the name of NgControl)
}
