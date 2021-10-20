import {AfterViewInit, ChangeDetectorRef, Component} from '@angular/core';

/**
 * Editor form for experiments.
 */
@Component({
  selector: 'bch-experiment-editor',
  templateUrl: './experiment-editor.component.html',
  styleUrls: ['./experiment-editor.component.scss']
})
export class ExperimentEditorComponent implements AfterViewInit {

  public timelineSteps = [
    'vessel',
    'biocatalyst',
    'reactants',
    'conditions',
    'experimentalData'
  ];

  constructor(private cdr: ChangeDetectorRef) {
  }

  submitForm() {
    // TODO write formmodel in experiment model and send to server
  }

  /**
   * Run one additional change detection cycle after the timeline initialized. This is needed, as the initial step
   * gets the information about it being the current step only after the view was initialized.
   */
  ngAfterViewInit() {
    this.cdr.detectChanges();
  }

}
