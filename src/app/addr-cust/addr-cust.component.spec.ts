import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddrCustComponent } from './addr-cust.component';

describe('AddrCustComponent', () => {
  let component: AddrCustComponent;
  let fixture: ComponentFixture<AddrCustComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddrCustComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddrCustComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
