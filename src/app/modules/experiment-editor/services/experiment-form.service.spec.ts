import {TestBed} from '@angular/core/testing';

import {ExperimentFormService} from './experiment-form.service';

describe('ExperimentFormService', () => {
  let service: ExperimentFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExperimentFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
