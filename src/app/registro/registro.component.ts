import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { PopUpDataConfirmationComponent } from "./components/pop-up-data-confirmation/pop-up-data-confirmation.component";
import { ServicesService } from "src/app/services.service";
import { GlobalService } from "src/app/global.service";
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.sass']
})
export class RegistroComponent implements OnInit {
  public emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  matcher = new MyErrorStateMatcher();
  public name= new FormControl('', [
    Validators.required,
  ]);
  public lastname= new FormControl('', [
    Validators.required,
  ]);
  public birthday1;
  public birthday= new FormControl('', [
    Validators.required,
  ]);
  public idDocument=new FormControl(null, [
    Validators.required,
  ]);
  public password=new FormControl('', [
    Validators.required,
  ]);;
  public passwordConfirm=new FormControl('', [
    Validators.required,
  ]);
  public userType=new FormControl('', [
    Validators.required,
  ]);;
  startDate = new  Date ( 1990 , 0 , 1 );
  constructor(private route:Router,public dialog: MatDialog,public service:ServicesService,public global:GlobalService) { }

  ngOnInit(): void {
  }
  registerUser(){
    console.log(this.birthday1)
    if(this.name.value==""){
      this.global.notif("Por favor escriba el Nombre.");
    }
    else if(this.lastname.value==""){
      this.global.notif("Por favor escriba el Apelido.");
    }
    else if(this.birthday.value==""){
      this.global.notif("Por favor selecione su fecha de nacimiento.");
    }
    else if(this.idDocument.value==null){
      this.global.notif("Por favor escriba el documento de identidad.");
    }
    else if(this.emailFormControl.value==""){
      this.global.notif("Por favor escriba el email.");
    }
    else if(this.password.value=="" || this.passwordConfirm.value=="" || this.password.value!= this.passwordConfirm.value){
      this.global.notif("Por favor verifique las contraseñas.");
    }
    else if(this.userType.value==""){
      this.global.notif("Por favor elija un tipo de usuario.");
    }else{
      const dialogConfig = new MatDialogConfig();
      dialogConfig.width='90%';
      dialogConfig.height='auto';
      dialogConfig.maxWidth='450px';
      dialogConfig.data = {name:this.name.value,lastname: this.lastname.value,birthday: this.birthday.value,idDocument: this.idDocument.value,email: this.emailFormControl.value,password: this.password.value,userType: this.userType.value};
      const dialogRef = this.dialog.open(PopUpDataConfirmationComponent,dialogConfig);
      dialogRef.afterClosed().subscribe(result => {
        if(result=="continue"){
          this.service.registro(this.name.value,this.lastname.value,this.birthday.value,this.idDocument.value,this.emailFormControl.value,this.password.value,this.userType.value).subscribe(data=>{
            if(data!=null){
              if(data.hasError==false){
                this.route.navigate([""]);
              }
              else{
                this.global.notif(data.errorDesc);
              }
            }else{
              this.global.notif("Tenemos Un error de conexión ,espere unos minutos y vuelva a intentarlo");
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
