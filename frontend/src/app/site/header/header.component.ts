import { Component } from '@angular/core';
import{BrandService} from '../../services/brand.service'
import {SubcategoryService} from '../../services/subcategory.service'
import {CategoryService} from '../../services/category.service'
import { CartService } from '../../services/cart.service';
import { FormGroup, FormControl , FormBuilder,Validators} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {


  categories:any
  brands:any
  subcategories:any
Incart =0;
cart = []
userId =localStorage.getItem("userId")

  form :FormGroup

  constructor(private bsrvc: BrandService , private ssrvc:SubcategoryService,private csrvc:CategoryService,private casrvc:CartService,
    private fb :FormBuilder, private router:Router){
this.form = this.fb.group({
  query: ['',[Validators.required]],
});
    this.bsrvc.getBrand().subscribe(res=>this.brands =res);
    this.ssrvc.getsubcategory().subscribe(res=>this.subcategories =res);
    this.csrvc.getCategory().subscribe(res=>this.categories =res);
   this.casrvc.getcart(this.userId).subscribe(res=>{this.cart =res;this.Incart =this.cart.length});
  }

  onSubmit() {
let url="/site/search/"+this.form.value.query;
this.router.navigateByUrl(url)
   
}
  isHovered: boolean = false;

  onMouseEnter() {
    this.isHovered = true;
  }

  onMouseLeave() {
    this.isHovered = false;
  }
}


