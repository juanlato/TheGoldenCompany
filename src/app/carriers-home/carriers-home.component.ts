import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carriers-home',
  templateUrl: './carriers-home.component.html',
  styleUrls: ['./carriers-home.component.sass']
})
export class CarriersHomeComponent implements OnInit {

  constructor(private route:Router) { }
  public userInfo:any;
  ngOnInit(): void {
    this.userInfo=JSON.parse(sessionStorage.getItem("login")).result[0];
  }

  gotoFindOrders(){
    this.route.navigate(["ordersCarrier"]);
  }

}
