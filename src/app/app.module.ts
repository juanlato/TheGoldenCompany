import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


import { AppRoutingModule } from './app-routing.module';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';

import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { RegistroComponent } from './registro/registro.component';
import { VendedorComponent } from './vendedor/vendedor.component';
import { FooterComponent } from './footer/footer.component';
import { CarriersHomeComponent } from './carriers-home/carriers-home.component';
import { CustomersHomeComponent } from './customers-home/customers-home.component';
import { FindOrdersCarrierComponent } from './find-orders-carrier/find-orders-carrier.component';
import { PopUpDataConfirmationComponent } from './registro/components/pop-up-data-confirmation/pop-up-data-confirmation.component';




const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'vendedor', component: VendedorComponent },
  { path: 'carrier', component: CarriersHomeComponent },
  { path: 'customer', component: CustomersHomeComponent },
  { path: 'ordersCarrier', component: FindOrdersCarrierComponent },
  
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    RegistroComponent,
    VendedorComponent ,   
    FooterComponent,
    CarriersHomeComponent, 
    CustomersHomeComponent,
    PopUpDataConfirmationComponent,
    FindOrdersCarrierComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule,
    MatDialogModule,
    RouterModule.forRoot(routes),    
    ],
  exports: [RouterModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
