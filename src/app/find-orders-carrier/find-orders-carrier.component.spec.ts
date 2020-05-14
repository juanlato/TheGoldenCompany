import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindOrdersCarrierComponent } from './find-orders-carrier.component';

describe('FindOrdersCarrierComponent', () => {
  let component: FindOrdersCarrierComponent;
  let fixture: ComponentFixture<FindOrdersCarrierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindOrdersCarrierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindOrdersCarrierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
