import {ComponentFixture, TestBed} from '@angular/core/testing';

import {EnzymeFormComponent} from './enzyme-form.component';

describe('EnzymeFormComponent', () => {
  let component: EnzymeFormComponent;
  let fixture: ComponentFixture<EnzymeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EnzymeFormComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnzymeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
