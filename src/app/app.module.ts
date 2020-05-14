import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


import { AppRoutingModule } from './app-routing.module';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatInputModule} from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule} from '@angular/material/dialog';
import { MatTooltipModule} from '@angular/material/tooltip';
import { MatButtonModule} from '@angular/material/button';
import { MatFormFieldModule} from '@angular/material/form-field';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { RegistroComponent } from './registro/registro.component';
import { VendedorComponent } from './vendedor/vendedor.component';
import { FooterComponent } from './footer/footer.component';
import { CarriersHomeComponent } from './carriers-home/carriers-home.component';
import { CustomersHomeComponent } from './customers-home/customers-home.component';



const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'vendedor', component: VendedorComponent },
  { path: 'carrier', component: CarriersHomeComponent },
  { path: 'customer', component: CustomersHomeComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    RegistroComponent,
    VendedorComponent ,   
    FooterComponent, CarriersHomeComponent, CustomersHomeComponent,    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatRadioModule,
    MatSelectModule,    
    MatDatepickerModule,
    MatFormFieldModule,
    MatButtonModule,
    MatTooltipModule,
    MatInputModule,
    MatDialogModule,
    CommonModule,
    FormsModule,
    NgbModule,
    RouterModule.forRoot(routes),
    ],
  exports: [RouterModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
