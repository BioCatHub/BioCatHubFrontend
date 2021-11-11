import {ChangeDetectorRef, Directive, Input, OnDestroy, OnInit} from '@angular/core';
import {ExperimentFormService} from '../services/experiment-form.service';
import {NavigationEnd, Router} from '@angular/router';
import {Subscription} from 'rxjs';

/**
 * Directive that dynamically sets the timeline step state.
 */
@Directive({
  selector: '[bchTimelineStepState]',
  exportAs: 'state'
})
export class TimelineStepStateDirective implements OnInit, OnDestroy {

  @Input() stepName: string;

  public state = 'not-started';

  private isValid = false;
  private isDirty = false;
  private isCurrentStep = false;
  private formGroupName: string;
  private statusSubscription: Subscription;
  private routerEventSubscription: Subscription;
  private routerStateSubscription: Subscription | undefined;

  constructor(private experimentFormService: ExperimentFormService,
              private cdr: ChangeDetectorRef,
              private router: Router) {
  }

  /**
   * Sets up event listeners for reacting to state changes.
   */
  ngOnInit() {
    this.computeIsCurrentStep();
    this.cdr.detectChanges();
    this.statusSubscription = this.experimentFormService.getExperimentFormSubGroup(this.stepName).statusChanges
      .subscribe(status => {
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
    this.routerEventSubscription = this.router.events
      .subscribe((event) => {
        if (event instanceof NavigationEnd) {
          this.computeIsCurrentStep();
        }
      });
    this.routerStateSubscription = this.router.routerState.root.firstChild?.firstChild?.firstChild?.data
      .subscribe(data => {
        if (data.formGroupName) {
          this.isCurrentStep = this.stepName === data.formGroupName;
          this.computeState();
        }
      });
  }

  /**
   * Unsubscribes from Observables on destroy.
   */
  ngOnDestroy() {
    this.routerEventSubscription.unsubscribe();
    this.routerStateSubscription?.unsubscribe();
    this.statusSubscription.unsubscribe();
  }

  /**
   * Checks if the step is the currently active step.
   */
  computeIsCurrentStep() {
    this.router.routerState.root.firstChild?.firstChild?.firstChild?.data.subscribe(data => {
      if (data.formGroupName) {
        this.isCurrentStep = this.stepName === data.formGroupName;
        this.computeState();
      }
    });
  }

  /**
   * Computes the current timeline step state.
   */
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
