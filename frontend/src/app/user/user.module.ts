import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { UserheaderComponent } from './userheader/userheader.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { PasswordComponent } from './password/password.component';
import { ResetComponent } from './reset/reset.component';
import { ForgetComponent } from './forget/forget.component';
import { AddressesComponent } from './addresses/addresses.component';
import { AddaddressComponent } from './addaddress/addaddress.component';
import { EditaddressComponent } from './editaddress/editaddress.component';
import { OrdersComponent } from './orders/orders.component';
import { OrderdetailsComponent } from './orderdetails/orderdetails.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    UserComponent,
    UserheaderComponent,
    LoginComponent,
    ProfileComponent,
    PasswordComponent,
    ResetComponent,
    ForgetComponent,
    AddressesComponent,
    AddaddressComponent,
    EditaddressComponent,
    OrdersComponent,
    OrderdetailsComponent,
    RegisterComponent,
    CartComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }
