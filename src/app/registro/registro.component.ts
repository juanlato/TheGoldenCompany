import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { PopUpDataConfirmationComponent } from "./components/pop-up-data-confirmation/pop-up-data-confirmation.component";


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

  constructor(private route:Router,public dialog: MatDialog) { }

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
      const dialogRef = this.dialog.open(PopUpDataConfirmationComponent, {width: '90%', height: 'auto',maxWidth:'450px'});

      dialogRef.afterClosed().subscribe(result => {
        if(result=="continue1"){this.route.navigate([""]);}
        console.log(result);
      });
    }
   
   // 
  }
  backToPage(){
    this.route.navigate([""]);
  }

}
