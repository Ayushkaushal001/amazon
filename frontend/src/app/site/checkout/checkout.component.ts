import { Component } from '@angular/core';
import {CartService} from '../../services/cart.service'
import {AddressService} from '../../services/address.service'
import {UserService} from '../../services/user.service'
import { OrderService } from '../../services/order.service';
import { ActivatedRoute } from '@angular/router';
import{Router} from '@angular/router';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {

data:any
 userId =localStorage.getItem("userId")
  addressId =localStorage.getItem("addressId")
 subTotal = 0;
 Save = 0;
 Charges = 0;
 Total = 0;
 subTotal1 = 0;
 user:any
 address:any
 msg = ""
constructor(private router: Router,private srvc: CartService,private route:ActivatedRoute,private osrvc: OrderService, private asrvc : AddressService , private usrvc : UserService) {
   this.getcart()
   this.usrvc.getUser(this.userId).subscribe(res => {this.user = res});
  
  
    this.asrvc.getAddressById(this.addressId).subscribe(res => {this.address = res});
  }
  getcart(){
     this.srvc.getcart(this.userId).subscribe(res => {this.data = res;
      console.log(res)
        for( let x of this.data){
          this.subTotal += x.quantity* x.price;
           this.subTotal1 += x.quantity* x.mrp;
        }
        this.Save = this.subTotal1-this.subTotal;     
        this.Charges = this.subTotal >= 499?0:150;
        this.Total = this.subTotal + this.Charges;
     
   });
  }
placeOrder(){
   let data = {emailId:this.user.emailId,firstName:this.user.firstName,
   lastName:this.user.lastName,addressId:this.addressId,
userId:this.userId,subtotal:this.subTotal ,charges:this.Charges,
status:'Ordered',mode:'COD'};

 this.osrvc.addOrder(data).subscribe(res=>{
console.log(res)
if(res.st==1){
   let data1 ={status:'Ordered',orderId:res.docId}
console.log(data1)
   this.srvc.updateStatus(this.userId,data1).subscribe(res =>{
console.log(res)
 this.msg = res.response;
 this.router.navigateByUrl('site/confirm')
 console.log(res)  
   })
} 
 })
}
}


