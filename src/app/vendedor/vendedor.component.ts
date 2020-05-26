import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from "src/app/services.service";

@Component({
  selector: 'app-vendedor',
  templateUrl: './vendedor.component.html',
  styleUrls: ['./vendedor.component.sass']
})
export class VendedorComponent implements OnInit {

  constructor(private route:Router,public service:ServicesService) { }

  public userInfo:any;

  ngOnInit(): void {
    this.userInfo=JSON.parse(sessionStorage.getItem("login")).result[0];
  }

  gotoNewpublication(){
    this.route.navigate(["newproduct"]);
  }
  gotoMypublications(){
    this.route.navigate(["myproducts"]);
  }
}
