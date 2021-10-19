import {Pipe, PipeTransform} from '@angular/core';
import {ExperimentFormService} from '../services/experiment-form.service';
import {BehaviorSubject, Observable} from 'rxjs';
import {Router} from '@angular/router';
import {map} from 'rxjs/operators';

// TODO complete the pipe so that the observable emits valid timeline states and unsubscribes properly. also check updates pure / impure etc.

@Pipe({
  name: 'timelineFormState'
})
export class TimelineFormStatePipe implements PipeTransform {

  private emitter: BehaviorSubject<string> = new BehaviorSubject<string>('not-started');

  constructor(private experimentFormService: ExperimentFormService,
              private router: Router) {
    this.router.events.subscribe(routerEvent => {
      console.log(routerEvent);
    });
  }

  transform(formGroupName: string): Observable<string> {
    return this.emitter.asObservable().pipe(map(value => {
      if (value === 'error') {
        return 'error';
      }
      if (value === formGroupName) {
        return 'current';
      }
      return 'not-started';
    }));
  }

}
