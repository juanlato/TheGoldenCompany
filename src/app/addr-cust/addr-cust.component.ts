import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-addr-cust',
  templateUrl: './addr-cust.component.html',
  styleUrls: ['./addr-cust.component.sass']
})
export class AddrCustComponent implements OnInit {

  constructor(private route:Router) { }

  public type = new FormControl('', [
    Validators.required,
  ]);

  public num1 = new FormControl('', [
    Validators.required,
  ]);

  public num2 = new FormControl('', [
    Validators.required,
  ]);

  public house = new FormControl('', [
    Validators.required,
  ]);

  public advice = new FormControl('', [
    Validators.required,
  ]);

  matcher = new MyErrorStateMatcher();

  ngOnInit(): void {
  }

  gotoFindMore(){
    this.route.navigate(["customer"]);
  }

  gotoCart(){
    this.route.navigate(["mi-carrito"]);
  }

}
