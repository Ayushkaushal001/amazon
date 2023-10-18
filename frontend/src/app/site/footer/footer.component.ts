import { Component } from '@angular/core';
import{BrandService} from '../../services/brand.service'
import {SubcategoryService} from '../../services/subcategory.service'
import {CategoryService} from '../../services/category.service'
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
categories:any
  brands:any
  subcategories:any

  constructor(private bsrvc: BrandService , private ssrvc:SubcategoryService,private csrvc:CategoryService){

    this.bsrvc.getBrand().subscribe(res=>this.brands =res);
    this.ssrvc.getsubcategory().subscribe(res=>this.subcategories =res);
    this.csrvc.getCategory().subscribe(res=>this.categories =res);

  }
}
