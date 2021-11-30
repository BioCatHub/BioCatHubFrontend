import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ReactantsFormComponent} from './reactants-form.component';

describe('ReactantsFormComponent', () => {
  let component: ReactantsFormComponent;
  let fixture: ComponentFixture<ReactantsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReactantsFormComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactantsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
