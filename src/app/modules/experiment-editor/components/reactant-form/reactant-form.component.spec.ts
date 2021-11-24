import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ReactantFormComponent} from './reactant-form.component';

describe('ReactantFormComponent', () => {
  let component: ReactantFormComponent;
  let fixture: ComponentFixture<ReactantFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReactantFormComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactantFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
