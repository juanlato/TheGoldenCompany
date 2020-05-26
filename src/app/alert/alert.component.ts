import { Component, OnInit,Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.sass']
})
export class AlertComponent implements OnInit {
  public message;
  constructor(public dialogRef: MatDialogRef<AlertComponent>,   @Inject(MAT_DIALOG_DATA) public data: any) {
    this.message=data.message
   }

  ngOnInit(): void {
  }
  close(){
    this.dialogRef.close();
  }

}
