import {ChangeDetectorRef, Directive, Input, OnInit} from '@angular/core';
import {ExperimentFormService} from '../services/experiment-form.service';
import {NavigationEnd, Router} from '@angular/router';

// TODO unsubscribe on destroy

@Directive({
  selector: '[bchTimelineStepState]',
  exportAs: 'state'
})
export class TimelineStepStateDirective implements OnInit {

  @Input() stepName: string;

  public state = 'not-started';

  private isValid = false;
  private isDirty = false;
  private isCurrentStep = false;
  private formGroupName: string;

  constructor(private experimentFormService: ExperimentFormService,
              private cdr: ChangeDetectorRef,
              private router: Router) {
  }

  ngOnInit() {
    this.computeIsCurrentStep();
    this.cdr.detectChanges();
    this.experimentFormService.getExperimentFormSubGroup(this.stepName).statusChanges.subscribe(status => {
      if (status === 'VALID') {
        this.isValid = true;
        this.isDirty = true;
        this.computeState();
      }
      if (status === 'INVALID') {
        this.isValid = false;
        this.isDirty = true;
        this.computeState();
      }
    });
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.computeIsCurrentStep();
      }
    });
    this.router.routerState.root.firstChild?.firstChild?.firstChild?.data.subscribe(data => {
      // TODO make step an Input and drop all this router data stuff
      if (data.formGroupName) {
        this.isCurrentStep = this.stepName === data.formGroupName;
        this.computeState();
      }
    });
  }

  computeIsCurrentStep() {
    this.router.routerState.root.firstChild?.firstChild?.firstChild?.data.subscribe(data => {
      if (data.formGroupName) {
        this.isCurrentStep = this.stepName === data.formGroupName;
        this.computeState();
      }
    });
  }

  computeState() {
    if (this.isCurrentStep) {
      this.state = 'current';
      return;
    }
    if (this.isValid && this.isDirty) {
      this.state = 'success';
      return;
    }
    if (!this.isValid && this.isDirty) {
      this.state = 'error';
      return;
    }
    this.state = 'not-started';
  }

}
