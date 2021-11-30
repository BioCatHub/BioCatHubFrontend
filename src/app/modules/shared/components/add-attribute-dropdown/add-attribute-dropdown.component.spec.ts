import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AddAttributeDropdownComponent} from './add-attribute-dropdown.component';

describe('AddAttributeDropdownComponent', () => {
  let component: AddAttributeDropdownComponent;
  let fixture: ComponentFixture<AddAttributeDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddAttributeDropdownComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAttributeDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
