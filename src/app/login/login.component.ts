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
      if(data.hasError==false){
        sessionStorage.setItem("login",JSON.stringify(data));
        if(data.result[0].type_User==1)
        {
          this.route.navigate(["vendedor"]);
        }
        else if(data.result[0].type_User==2){
          this.route.navigate(["carrier"]);
        }
        else if(data.result[0].type_User==3){
          this.route.navigate(["customer"]);
        }
      }
    });
  }

}
