import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from "src/app/services.service";

@Component({
  selector: 'app-newproduct',
  templateUrl: './newproduct.component.html',
  styleUrls: ['./newproduct.component.sass']
})
export class NewproductComponent implements OnInit {

  constructor(private route:Router,public service:ServicesService) { }

  ngOnInit(): void {
  }
  gotoBack(){
    this.route.navigate(["vendedor"]);
  }

}
