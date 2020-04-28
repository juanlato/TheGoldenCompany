import { Injectable } from '@angular/core';
import { Service } from './services';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AlertasComponent } from './alertas/alertas.component';
import { LoadingScreenService } from './services/loading-screen/loading-screen.service';
import { Router ,ActivatedRoute} from '@angular/router';
import { Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class GlobalService {
  //variables
      //public years: any;
  //suscriptores
      //loadObserver = new Subject();
  
  constructor(private router: Router,private activatedRouter: ActivatedRoute, public dialog: MatDialog, public services: Service, private loadingScreenService: LoadingScreenService) { }
  notif(msg) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = { message: msg };
    const dialogRef = this.dialog.open(AlertasComponent, dialogConfig);
  }
  notifSignOff(msg) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = { message: msg, session: true };
    const dialogRef = this.dialog.open(AlertasComponent, dialogConfig);
  }
  
  public signOff() {
    sessionStorage.setItem("familyPlan", null);

    sessionStorage.removeItem("session");
    this.router.navigate(['']);  
  }
  validarEmail(email) {
    let expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!expr.test(email)) {
      return false;
    } else {
      return true;
    }
    //return !expr.test(email);
  }
  validarVisaCard(card) {
    let expr = /^4[0-9]{12}(?:[0-9]{3})?$/;
    if (!expr.test(card)) {
      return false;
    } else {
      return true;
    }
  }
  validarMasterCard(card) {
    let expr = /^5[1-5][0-9]{14}$/;
    if (!expr.test(card)) {
      return false;
    } else {
      return true;
    }
  }
  validarAmexCard(card) {
    let expr = /^3[47][0-9]{13}$/;
    if (!expr.test(card)) {
      return false;
    } else {
      return true;
    }
  }
  loadYears() {
    let years = [];
    let year = new Date();
    var anio = year.getFullYear();
    for (var i = 0; i < 10; i++) {
      years[i] = anio + i;
    }
    return years
  }
}