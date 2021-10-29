import {TestBed} from '@angular/core/testing';

import {ControlGroupService} from './form-control.service';

describe('FormControlService', () => {
  let service: ControlGroupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ControlGroupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
