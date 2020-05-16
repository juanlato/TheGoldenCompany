import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-find-orders-customer',
  templateUrl: './find-orders-customer.component.html',
  styleUrls: ['./find-orders-customer.component.sass']
})
export class FindOrdersCustomerComponent implements OnInit {

  public filtros=[
    {value: 'Precio ASC', viewValue: 'Precio ASC'},
    {value: 'Precio DESC', viewValue: 'Precio DESC'},
    {value: 'Fecha ACS', viewValue: 'Fecha ACS'},
    {value: 'Fecha DESC', viewValue: 'Fecha DESC'}
  ];
  public valueFiltro;
  public valueFinder;

  constructor() { }

  ngOnInit(): void {
  }
  findOrdes(){
    console.log(this.valueFinder);
    console.log(this.valueFiltro);
  }

}
