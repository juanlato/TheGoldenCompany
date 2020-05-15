import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpDataConfirmationComponent } from './pop-up-data-confirmation.component';

describe('PopUpDataConfirmationComponent', () => {
  let component: PopUpDataConfirmationComponent;
  let fixture: ComponentFixture<PopUpDataConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopUpDataConfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopUpDataConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
