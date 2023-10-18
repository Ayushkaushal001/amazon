import { Component } from '@angular/core';
import {CartService} from '../../services/cart.service'
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

data:any
 userId =localStorage.getItem("userId")
 subTotal = 0;
 Save = 0;
 Charges = 0;
 Total = 0;
 subTotal1 = 0;
 msg = ""
constructor(private srvc: CartService,private route:ActivatedRoute) {
   this.getcart()
  }
  getcart(){
    this.subTotal = 0;
 this.Save = 0;
 this.Charges = 0;
 this.Total = 0;
 this.subTotal1 = 0;

     this.srvc.getcart(this.userId).subscribe(res => {this.data = res;
        for( let x of this.data){
      
          this.subTotal += x.quantity* x.price;
           this.subTotal1 += x.quantity* x.mrp;
        }
        this.Save = this.subTotal1-this.subTotal;
        this.Charges = this.subTotal >= 499?0:150;
        this.Total = this.subTotal + this.Charges;
    
   });
  }

onupdate(id:string,action:string,quantity:any){
  let q=0;
if(action=='inc')
  q=quantity<5?++quantity:quantity;
else if(action=='dec')
  q=quantity>1?--quantity:quantity;
this.srvc.updateItem(id,{quantity:q}).subscribe(res=>{
this.msg=res.response;
if(res.st==1)
this.getcart();
})
}

 delItem(id:string){
  this.srvc.delItem(id).subscribe(res=>{
    window.alert(res.response);
    if(res.st == 1)
  this.getcart()

  })
 }
}
 



