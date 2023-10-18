import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SiteRoutingModule } from './site-routing.module';
import { SiteComponent } from './site.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './category/category.component';
import { ShopComponent } from './shop/shop.component';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddressComponent } from './address/address.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { SearchComponent } from './search/search.component';


@NgModule({
  declarations: [
    SiteComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    AboutComponent,
    HomeComponent,
    CategoryComponent,
    ShopComponent,
    ProductComponent,
    CartComponent,
    CheckoutComponent,
    AddressComponent,
    ConfirmComponent,
    SearchComponent,
 
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SiteRoutingModule

  ]
})
export class SiteModule { }
