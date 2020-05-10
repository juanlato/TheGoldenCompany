import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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


import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'registro', component: LoginComponent },
  { path: 'registro', component: LoginComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent    
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
    RouterModule.forRoot(routes)],
  exports: [RouterModule],
  bootstrap: [AppComponent],
})
export class AppModule { }
