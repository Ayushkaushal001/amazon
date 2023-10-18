import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { ForgetComponent } from './forget/forget.component';
import { LoginComponent } from './login/login.component';
import { PasswordComponent } from './password/password.component';
import { ProfileComponent } from './profile/profile.component';
import { ResetComponent } from './reset/reset.component';
import { RegisterComponent } from './register/register.component';
import { UserheaderComponent } from './userheader/userheader.component';
import { AddressesComponent } from './addresses/addresses.component';
import { AddaddressComponent } from './addaddress/addaddress.component';
import { EditaddressComponent } from './editaddress/editaddress.component';
import { OrderdetailsComponent } from './orderdetails/orderdetails.component';
import { OrdersComponent } from './orders/orders.component';
import { UserAuthGuard } from './user-auth.guard';

const routes: Routes = [
      { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent },
    { path: 'forgot', component: ForgetComponent },
    { path: 'reset', component: ResetComponent },
    
     
    
  { path: '', component: UserComponent,
  children: [
{ path: 'profile', component: ProfileComponent ,canActivate:[UserAuthGuard] },
{ path: 'password', component: PasswordComponent ,canActivate:[UserAuthGuard]},
{ path: 'addresses', component: AddressesComponent , canActivate : [UserAuthGuard]},
{ path: 'addaddress', component: AddaddressComponent , canActivate : [  UserAuthGuard]},
{ path: 'editaddress/:id', component: EditaddressComponent , canActivate  : [UserAuthGuard]},
{ path: 'orderdetails/:id', component: OrderdetailsComponent ,canActivate : [UserAuthGuard]},
{ path: 'orders', component: OrdersComponent ,canActivate:[UserAuthGuard] },

  ] },

]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }

