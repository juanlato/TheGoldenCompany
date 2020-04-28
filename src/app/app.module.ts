import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatInputModule} from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule} from '@angular/material/dialog';
import { MatTooltipModule} from '@angular/material/tooltip';
import { MatButtonModule} from '@angular/material/button';
import { MatFormFieldModule} from '@angular/material/form-field';

import { LoadingScreenComponent } from './components/loading-screen/loading-screen.component';
import { LoadingScreenMinComponent } from './components/loading-screen-min/loading-screen-min.component';
import { AlertasComponent } from './alertas/alertas.component';

import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    LoadingScreenComponent,
    LoadingScreenMinComponent,
    AlertasComponent,
    LoginComponent    
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
    RouterModule.forRoot([
      {
         path: '', component: LoginComponent 
      },
    ]),
    BrowserAnimationsModule,
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
