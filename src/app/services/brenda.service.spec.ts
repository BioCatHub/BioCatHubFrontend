import {TestBed} from '@angular/core/testing';

import {BrendaService} from './brenda.service';

describe('BrendaService', () => {
  let service: BrendaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BrendaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
