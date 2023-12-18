import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectRandomNumberComponent } from './select-random-number.component';

describe('SelectRandomNumberComponent', () => {
  let component: SelectRandomNumberComponent;
  let fixture: ComponentFixture<SelectRandomNumberComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectRandomNumberComponent]
    });
    fixture = TestBed.createComponent(SelectRandomNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
