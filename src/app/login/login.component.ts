import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  public userName;
  public password;
  public botonTrueSelector:string;
  constructor(private route:Router) { }

  ngOnInit(): void {

  }
  gotoRegiter(){
    this.route.navigate(["registro"]);
  }
  login(){
    console.log(this.userName+" "+this.password)
  }

}
