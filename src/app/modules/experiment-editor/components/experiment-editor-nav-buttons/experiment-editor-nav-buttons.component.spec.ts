import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ExperimentEditorNavButtonsComponent} from './experiment-editor-nav-buttons.component';

describe('ExperimentEditorNavButtonsComponent', () => {
  let component: ExperimentEditorNavButtonsComponent;
  let fixture: ComponentFixture<ExperimentEditorNavButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExperimentEditorNavButtonsComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperimentEditorNavButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
