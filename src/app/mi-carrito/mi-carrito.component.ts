import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mi-carrito',
  templateUrl: './mi-carrito.component.html',
  styleUrls: ['./mi-carrito.component.sass']
})
export class MiCarritoComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  gotoFindMore(){
    this.route.navigate(["customer"]);
  }

  gotoAddr(){
    this.route.navigate(["addressCustomer"]);
  }

}

