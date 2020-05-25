import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductdetailpurchaseComponent } from './productdetailpurchase.component';

describe('ProductdetailpurchaseComponent', () => {
  let component: ProductdetailpurchaseComponent;
  let fixture: ComponentFixture<ProductdetailpurchaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductdetailpurchaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductdetailpurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
