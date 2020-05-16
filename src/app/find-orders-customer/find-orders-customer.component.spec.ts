import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindOrdersCustomerComponent } from './find-orders-customer.component';

describe('FindOrdersCustomerComponent', () => {
  let component: FindOrdersCustomerComponent;
  let fixture: ComponentFixture<FindOrdersCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindOrdersCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindOrdersCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
