import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from "src/app/services.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  public userName;
  public password;
  public botonTrueSelector:string;
  constructor(private route:Router,public service:ServicesService) { }

  ngOnInit(): void {

  }
  gotoRegiter(){
    this.route.navigate(["registro"]);
  }
  login(){
    console.log(this.userName+" "+this.password)
    this.service.login(this.userName,this.password).subscribe(data=>{
      console.log(data);
    });
  }

}
