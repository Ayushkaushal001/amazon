import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SiteComponent } from './site.component';
import { AboutComponent } from './about/about.component';
import { CategoryComponent } from './category/category.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { CartComponent } from './cart/cart.component';
import { ProductComponent } from './product/product.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { AddressComponent } from './address/address.component';
import { SearchComponent } from './search/search.component';
import { UserAuthGuard } from './../user/user-auth.guard';
const routes: Routes = [
  { path: '', component: SiteComponent,
  children:[
{path:'about' ,component:AboutComponent},
{path:'address' ,component:AddressComponent,canActivate:[UserAuthGuard]},
{path:'contact',component:ContactComponent},
{path:'home',component:HomeComponent},
{path:'category',component:CategoryComponent},
{path:'shop/:tag/:id/:name',component:ShopComponent},
{path:'cart',component:CartComponent},
{path:'checkout',component:CheckoutComponent,canActivate:[UserAuthGuard]},
{path:'confirm',component:ConfirmComponent,canActivate:[UserAuthGuard]},
{path:'search/:query',component:SearchComponent},
{path:'product/:id',component:ProductComponent},
] },

  ];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SiteRoutingModule { }
