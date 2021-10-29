import {Directive, Input, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';
import {NgControl} from '@angular/forms';
import {FormControlService} from '../services/form-control.service';

// TODO unsubscribe on destroy

@Directive({
  selector: '[bchIfError]'
})
export class IfErrorDirective implements OnInit {

  @Input() bchIfErrorControlName: string;
  @Input() bchIfError: string; // Name of the error to react on

  private hasView = false;
  private control: NgControl;
  private touched = false;

  constructor(private templateRef: TemplateRef<any>,
              private formControlService: FormControlService,
              private viewContainer: ViewContainerRef) {
  }

  ngOnInit() {
    this.control = this.formControlService.getControl(this.bchIfErrorControlName);
    this.destroyView();
    this.formControlService.controlElementTouchedChanges(this.bchIfErrorControlName).subscribe(touched => {
      this.touched = touched;
      this.checkStatus();
    });


    this.control.statusChanges?.subscribe(() => {
      this.checkStatus();
    });
  }

  checkStatus() {
    if (this.control.invalid && this.touched) {
      this.createView();
    } else {
      this.destroyView();
    }
    this.formControlService.onErrorStateChange();
  }

  createView() {
    if (!this.hasView) {
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.hasView = true;
    }
  }

  destroyView() {
    if (this.hasView) {
      this.viewContainer.clear();
      this.hasView = false;
    }
  }


}
