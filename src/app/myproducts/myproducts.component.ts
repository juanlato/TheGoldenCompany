import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from "src/app/services.service";

@Component({
  selector: 'app-myproducts',
  templateUrl: './myproducts.component.html',
  styleUrls: ['./myproducts.component.sass']
})
export class MyproductsComponent implements OnInit {

  constructor(private route:Router,public service:ServicesService) { }

  ngOnInit(): void {
  }

  gotoBack(){
    this.route.navigate(["vendedor"]);
  }
  gotoNewpublication(){
    this.route.navigate(["newproduct"]);
  }

}
