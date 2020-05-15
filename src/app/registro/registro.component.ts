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

  constructor(private route:Router,public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  registerUser(){
    const dialogRef = this.dialog.open(PopUpDataConfirmationComponent, {width: '90%', height: 'auto',maxWidth:'450px'});

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
   // this.route.navigate([""]);
  }
  backToPage(){
    this.route.navigate([""]);
  }

}
