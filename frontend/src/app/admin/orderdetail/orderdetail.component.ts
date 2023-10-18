import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { OrderService } from '../../services/order.service';
import {AddressService} from '../../services/address.service'
import {CartService} from '../../services/cart.service';

@Component({
  selector: 'app-orderdetail',
  templateUrl: './orderdetail.component.html',
  styleUrls: ['./orderdetail.component.css']
})
export class OrderdetailComponent {

 orderId =""
  address:any;
  orderInfo:any
  addressId =""
  items:any
  constructor(private route:ActivatedRoute,private osrvc:OrderService,private asrvc:AddressService,
  private csrvc:CartService){
  this.route.params.subscribe(param=>{
this.orderId = param['id'];
this.osrvc.getorder(this.orderId).subscribe(res=>{

  this.orderInfo =res;
  this.addressId =res.addressId;

  this.asrvc.getAddressById(this.addressId).subscribe(res=>{
 this.address=res;

  })
   this.csrvc.getorderitem(this.orderId).subscribe(res=>{
 this.items=res;

  })
})

  })
}
updateStatus(s:string){
  this.osrvc.updateStatus(this.orderId,{firstName:this.orderInfo.firstName,
    lastName:this.orderInfo.lastName,emailId:this.orderInfo.emailId,status:s}).subscribe(res=>{
 if(res.st==1){
  this.osrvc.getorder(this.orderId).subscribe(res=>{
  this.orderInfo =res;
})
  }

})
}
}
