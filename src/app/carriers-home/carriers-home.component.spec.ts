import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarriersHomeComponent } from './carriers-home.component';

describe('CarriersHomeComponent', () => {
  let component: CarriersHomeComponent;
  let fixture: ComponentFixture<CarriersHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarriersHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarriersHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
