import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminheaderComponent } from './adminheader/adminheader.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { EditproductComponent } from './editproduct/editproduct.component';
import { CategoryComponent } from './category/category.component';
import { ContactComponent } from './contact/contact.component';
import { UsersComponent } from './users/users.component';
import { BrandComponent } from './brand/brand.component';
import { OrdersComponent } from './orders/orders.component';
import { SubcategoryComponent } from './subcategory/subcategory.component';
import { OrderdetailComponent } from './orderdetail/orderdetail.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AdminComponent,
    AdminheaderComponent,
    LoginComponent,
    ProductsComponent,
    AddproductComponent,
    EditproductComponent,
    CategoryComponent,
    ContactComponent,
    UsersComponent,
    BrandComponent,
    OrdersComponent,
    SubcategoryComponent,
    OrderdetailComponent
    
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
