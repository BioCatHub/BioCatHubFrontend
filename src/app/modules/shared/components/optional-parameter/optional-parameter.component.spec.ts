import {ComponentFixture, TestBed} from '@angular/core/testing';

import {OptionalParameterComponent} from './optional-parameter.component';

describe('OptionalParameterComponent', () => {
  let component: OptionalParameterComponent;
  let fixture: ComponentFixture<OptionalParameterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OptionalParameterComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionalParameterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
