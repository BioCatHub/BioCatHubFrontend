import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ReactionFormulaGraphicComponent} from './reaction-formula-graphic.component';

describe('ReactionFormulaGraphicComponent', () => {
  let component: ReactionFormulaGraphicComponent;
  let fixture: ComponentFixture<ReactionFormulaGraphicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReactionFormulaGraphicComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactionFormulaGraphicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
