import {ComponentFixture, TestBed} from '@angular/core/testing';

import {BiocatalystFormComponent} from './biocatalyst-form.component';

describe('BiocatalystFormComponent', () => {
  let component: BiocatalystFormComponent;
  let fixture: ComponentFixture<BiocatalystFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BiocatalystFormComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BiocatalystFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
