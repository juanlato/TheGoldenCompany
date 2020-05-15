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

  constructor(public dialogRef: MatDialogRef<PopUpDataConfirmationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit(): void {
  }
  close(value){
    this.dialogRef.close(value);
  }

}
