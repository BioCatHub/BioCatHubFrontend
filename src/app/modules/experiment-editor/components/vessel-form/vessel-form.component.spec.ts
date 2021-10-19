import {ComponentFixture, TestBed} from '@angular/core/testing';

import {VesselFormComponent} from './vessel-form.component';

describe('VesselFormComponent', () => {
  let component: VesselFormComponent;
  let fixture: ComponentFixture<VesselFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VesselFormComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VesselFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
