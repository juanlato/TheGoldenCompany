import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  public botonTrueSelector:string;
  constructor(private route:Router) { }

  ngOnInit(): void {
    console.log("puto el que lo lea");
  }
  open(value){
    console.log("puto el que lo lea"+value);
    alert("puto el que lo lea"+value);
    //this.route.navigate(["header"]);
  }

}
