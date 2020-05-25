import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { PopUpDataConfirmationComponent } from "./components/pop-up-data-confirmation/pop-up-data-confirmation.component";
import { ServicesService } from "src/app/services.service";

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.sass']
})
export class RegistroComponent implements OnInit {
  public name;
  public lastname;
  public birthday;
  public idDocument;
  public email;
  public password;
  public passwordConfirm;
  public userType;
 
  constructor(private route:Router,public dialog: MatDialog,public service:ServicesService) { }

  ngOnInit(): void {
  }
  registerUser(){
      
    if(this.name==null){

    }
    else if(this.lastname==null){

    }
    else if(this.birthday==null){

    }
    else if(this.idDocument==null){

    }
    else if(this.email==null){

    }
    else if(this.password==null || this.passwordConfirm==null || this.password!= this.passwordConfirm){

    }
    else if(this.userType==null){

    }else{
      const dialogConfig = new MatDialogConfig();
      dialogConfig.width='90%';
      dialogConfig.height='auto';
      dialogConfig.maxWidth='450px';
      dialogConfig.data = {name:this.name,lastname: this.lastname,birthday: this.birthday,idDocument: this.idDocument,email: this.email,password: this.password,userType: this.userType};
      const dialogRef = this.dialog.open(PopUpDataConfirmationComponent,dialogConfig);
      dialogRef.afterClosed().subscribe(result => {
        if(result=="continue"){
          this.service.registro(this.name,this.lastname,this.birthday,this.idDocument,this.email,this.password,this.userType).subscribe(data=>{
            if(data!=null){
              if(data.hasError==false){
                //this.route.navigate([""]);
              }
              else{
                
              }
            }else{

            }            
            
          });
          
        }
        console.log(result);
      });
    }
   
   // 
  }
  backToPage(){
    this.route.navigate([""]);
  }

}
