import { Component, OnInit,Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


export interface DialogData {

}

@Component({
  selector: 'app-pop-up-data-confirmation',
  templateUrl: './pop-up-data-confirmation.component.html',
  styleUrls: ['./pop-up-data-confirmation.component.sass']
})
export class PopUpDataConfirmationComponent implements OnInit {
  public name;
  public lastname;
  public birthday;
  public idDocument;
  public email;
  public userType;
  public userOp=["proveedor","trasportador","cliente"];

  constructor(public dialogRef: MatDialogRef<PopUpDataConfirmationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      if(data.name!=undefined){
        this.name=data.name;
      }
      if(data.lastname!=undefined){
        this.lastname=data.lastname;
      }
      if(data.birthday!=undefined){
        this.birthday=data.birthday;
      }
      if(data.email!=undefined){
        this.email=data.email;
      }
      if(data.idDocument!=undefined){
        this.idDocument=data.idDocument;
      }
      if(data.userType!=undefined){
        this.userType=data.userType-1;
      }
     }

  ngOnInit(): void {
  }
  close(value){
    this.dialogRef.close(value);
  }

}
