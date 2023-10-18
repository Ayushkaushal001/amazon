import { Component } from '@angular/core';
import {ProductService} from '../../services/product.service'
import{BrandService} from '../../services/brand.service'
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../../services/cart.service';
import{Router} from '@angular/router'
import{FormGroup, FormControl,FormBuilder,Validators} from '@angular/forms';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
d:any;
brand:any;
inCart:any
form : FormGroup;
msg :any
productId = ""
userId =localStorage.getItem("userId")

constructor(private srvc:ProductService,private route:ActivatedRoute,private bsrvc:BrandService,
  private fb :FormBuilder,private csrvc:CartService,
  private router:Router) {
  this.form = this.fb.group({
    quantity:['1', Validators.required ],
    
 });

this.route.params.subscribe(p=>{
  this.srvc.getproduct(p['id']).subscribe(res=>{
    this.d= res;
    this.productId = res._id;
     this.bsrvc.getbrandbyId(this.d.brand).subscribe(res=>{
    this.brand= res;
  })
      this.csrvc.inCart(this.userId,this.d._id).subscribe(res=>{
     this.inCart = res;
     console.log(this.inCart)
  })
})



})

}

onSubmit(){
  let data =  {title:this.d.title ,image:this.d.image,mrp:this.d.mrp,price:this.d.price,quantity:this.form.value.quantity,userId:this.userId,productId:this.d._id}
 this.csrvc.addItem(data).subscribe(res=>{
console.log(data)
 this.msg = res.response;
if(res.st==1)
 window.location.reload()  
 })
}
moveToLogin(){
 localStorage.setItem('sproductId',this.productId);
 this.router.navigateByUrl('/user/login')
}

}
