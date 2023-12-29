import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastNumberComponent } from './last-number.component';

describe('LastNumberComponent', () => {
  let component: LastNumberComponent;
  let fixture: ComponentFixture<LastNumberComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LastNumberComponent]
    });
    fixture = TestBed.createComponent(LastNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
