import {Directive} from '@angular/core';
import {ControlGroupService} from '../services/control-group.service';

/**
 * Empty directive that provides the ControlGroupService for a control group.
 * A control group in this sense are a number of form controls that share the same block for error and info
 * control messages. In most cases this is just a single input but it can also be an input group (value + unit).
 */
@Directive({
  selector: '[bchControlGroup]',
  providers: [
    ControlGroupService
  ]
})
export class ControlGroupDirective {
}
