import {Component, Input} from '@angular/core';

/**
 * Component that renders a navigation bar for the experiment editor that contains next and previous buttons.
 */
@Component({
  selector: 'bch-experiment-editor-nav-buttons',
  templateUrl: './experiment-editor-nav-buttons.component.html',
  styleUrls: ['./experiment-editor-nav-buttons.component.scss']
})
export class ExperimentEditorNavButtonsComponent {

  @Input() routePrevious = null;
  @Input() routeNext = null;

}
