import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBadgeModule} from '@angular/material/badge';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTreeModule} from '@angular/material/tree';
import {A11yModule} from '@angular/cdk/a11y';
import {ClipboardModule} from '@angular/cdk/clipboard';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {PortalModule} from '@angular/cdk/portal';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';

import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { RegistroComponent } from './registro/registro.component';
import { VendedorComponent } from './vendedor/vendedor.component';
import { FooterComponent } from './footer/footer.component';
import { CarriersHomeComponent } from './carriers-home/carriers-home.component';
import { CustomersHomeComponent } from './customers-home/customers-home.component';
import { FindOrdersCarrierComponent } from './find-orders-carrier/find-orders-carrier.component';
import { PopUpDataConfirmationComponent } from './registro/components/pop-up-data-confirmation/pop-up-data-confirmation.component';
import { MiCarritoComponent } from './mi-carrito/mi-carrito.component';
import { FindOrdersCustomerComponent } from './find-orders-customer/find-orders-customer.component';
import { MyproductsComponent } from './myproducts/myproducts.component';
import { NewproductComponent } from './newproduct/newproduct.component';
import { AlertComponent } from './alert/alert.component';
import { ProductdetailpurchaseComponent } from './productdetailpurchase/productdetailpurchase.component';
import { AddrCustComponent } from './addr-cust/addr-cust.component';





const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'vendedor', component: VendedorComponent },
  { path: 'myproducts', component: MyproductsComponent },
  { path: 'newproduct', component: NewproductComponent },
  { path: 'carrier', component: CarriersHomeComponent },
  { path: 'customer', component: CustomersHomeComponent },
  { path: 'ordersCustomer', component: FindOrdersCustomerComponent },
  { path: 'ordersCarrier', component: FindOrdersCarrierComponent },
  { path: 'mi-carrito', component: MiCarritoComponent },
  { path: 'productdetpur', component: ProductdetailpurchaseComponent },
  { path: 'addressCustomer', component: AddrCustComponent },


  
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
    FindOrdersCarrierComponent,
    MiCarritoComponent,
    FindOrdersCustomerComponent,
    MyproductsComponent,
    NewproductComponent,
    AlertComponent,
    ProductdetailpurchaseComponent,
    AddrCustComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),    
    ],
  exports: [
    RouterModule,
    A11yModule,
    ClipboardModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    PortalModule,
    ScrollingModule,
  ],
  bootstrap: [AppComponent],
  entryComponents:[PopUpDataConfirmationComponent,AlertComponent]
})
export class AppModule { }
