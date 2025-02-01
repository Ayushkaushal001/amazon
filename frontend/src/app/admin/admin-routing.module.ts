import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AdminheaderComponent } from './adminheader/adminheader.component';
import { CategoryComponent } from './category/category.component';
import { EditproductComponent } from './editproduct/editproduct.component';
import { ContactComponent } from './contact/contact.component';
import { ProductsComponent } from './products/products.component';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { BrandComponent } from './brand/brand.component';
import { OrderdetailComponent } from './orderdetail/orderdetail.component';
import { OrdersComponent } from './orders/orders.component';
import { SubcategoryComponent } from './subcategory/subcategory.component';
import { AdminAuthGuard } from './admin-auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: AdminComponent, 
 children:[
 { path: 'users', component: UsersComponent , canActivate :[AdminAuthGuard]},

  { path: 'contact', component: ContactComponent , canActivate : [AdminAuthGuard] },
  { path: 'category', component: CategoryComponent , canActivate  : [AdminAuthGuard] },
  { path: 'subcategory', component: SubcategoryComponent, canActivate : [AdminAuthGuard] },
  { path: 'brand', component: BrandComponent ,canActivate : [AdminAuthGuard] },
  { path: 'addproduct', component: AddproductComponent, canActivate : [AdminAuthGuard] },
   { path: 'products', component: ProductsComponent , canActivate : [AdminAuthGuard] },
  {path: 'editproduct/:id' ,component: EditproductComponent , canActivate : [AdminAuthGuard]},
{ path: 'orders', component: OrdersComponent , canActivate : [AdminAuthGuard] },
{ path: 'orderdetail/:id', component: OrderdetailComponent , canActivate : [AdminAuthGuard] },

  ]},
 ]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
