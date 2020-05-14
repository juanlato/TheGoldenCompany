import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carriers-home',
  templateUrl: './carriers-home.component.html',
  styleUrls: ['./carriers-home.component.sass']
})
export class CarriersHomeComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  gotoFindOrders(){
    this.route.navigate(["ordersCarrier"]);
  }

}
