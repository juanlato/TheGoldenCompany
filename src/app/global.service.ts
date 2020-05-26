import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AlertComponent } from "src/app/alert/alert.component";


@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor(public dialog: MatDialog) { }
  notif(msg) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width='90%';
    dialogConfig.height='auto';
    dialogConfig.maxWidth='450px';
    dialogConfig.data = { message: msg };
    const dialogRef = this.dialog.open(AlertComponent, dialogConfig);
  }
      
}
