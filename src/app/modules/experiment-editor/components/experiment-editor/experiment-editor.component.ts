import {AfterViewInit, ChangeDetectorRef, Component} from '@angular/core';
import {ExperimentEditorStep} from '../../interfaces/experiment-editor-step.interface';

/**
 * Editor form for experiments.
 */
@Component({
  selector: 'bch-experiment-editor',
  templateUrl: './experiment-editor.component.html',
  styleUrls: ['./experiment-editor.component.scss']
})
export class ExperimentEditorComponent implements AfterViewInit {

  public timelineSteps: ExperimentEditorStep[] = [
    {
      formControlName: 'vessel',
      pathSegment: 'vessel',
      title: 'Vessel'
    },
    {
      formControlName: 'biocatalyst',
      pathSegment: 'biocatalyst',
      title: 'Biocatalyst'
    },
    {
      formControlName: 'reactants',
      pathSegment: 'reactants',
      title: 'Reactants'
    },
    {
      formControlName: 'conditions',
      pathSegment: 'conditions',
      title: 'Conditions'
    },
    {
      formControlName: 'experimentalData',
      pathSegment: 'experimental-data',
      title: 'Experimental data'
    }
  ];

  constructor(private cdr: ChangeDetectorRef) {
  }

  /**
   * Run one additional change detection cycle after the timeline initialized. This is needed, as the initial step
   * gets the information about it being the current step only after the view was initialized.
   */
  ngAfterViewInit() {
    this.cdr.detectChanges();
  }

}
