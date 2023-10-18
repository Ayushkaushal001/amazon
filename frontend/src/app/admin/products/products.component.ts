import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  data: any;

  constructor(private srvc: ProductService) {
    this.srvc.getproducts().subscribe(res => {
      this.data = res;
    });
  }


 delproduct(id:string){
  this.srvc.delproduct(id).subscribe(res=>{
    window.alert(res.response);
    if(res.st ==1)
      this.srvc.getproducts().subscribe(res =>this.data = res)
  })
 }

}


