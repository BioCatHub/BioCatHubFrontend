import {Component} from '@angular/core';
import {ExperimentFormService} from '../../services/experiment-form.service';

/**
 * Editor form for experiments.
 */
@Component({
  selector: 'bch-experiment-editor',
  templateUrl: './experiment-editor.component.html',
  styleUrls: ['./experiment-editor.component.scss']
})
export class ExperimentEditorComponent {

  constructor(private experimentFormService: ExperimentFormService) {
  }

  submitForm() {
    // TODO write formmodel in experiment model and send to server
  }

}
