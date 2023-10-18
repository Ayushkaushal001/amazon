import { Component } from '@angular/core';
 import {ProductService} from '../../services/product.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent {
 data:any;
tag = ""
id = ""
name = ""
constructor(private srvc:ProductService,private route:ActivatedRoute) {
this.route.params.subscribe(p=>{
 this.tag =p['tag'];
 this.id =p['id'];
 this.name =p['name'];
 if(this.tag == "category"){
  console.log(this.tag)
 this.srvc.getproductbycategory(this.id).subscribe(res=>{this.data = res;})
 }

else if(this.tag == "subcategory"){
  console.log(this.tag)
  console.log(this.id)
 this.srvc.getproductbysubcategory(this.id).subscribe(res=>{this.data = res;})
}

else if(this.tag =="brand"){
 this.srvc.getproductbybrand(this.id).subscribe(res=>{this.data = res;})
}

else{
   this.srvc.getproducts().subscribe(res=>{this.data = res;})
}



})
}

}