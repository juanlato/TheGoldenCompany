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

  

  ngOnInit(): void {
  }

  gotoMypublications(){
    this.route.navigate(["myproducts"]);
  }
  gotoNewpublication(){
    this.route.navigate(["newproduct"]);
  }

}
