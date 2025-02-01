import { Component } from '@angular/core';
import {AddressService} from '../../services/address.service'
import{Router} from '@angular/router'
@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent {
data: any;
 userId =localStorage.getItem("userId")
  constructor(private srvc: AddressService , private router : Router) {
    this.srvc.getAddress(this.userId).subscribe(res => {
      this.data = res;
    });
  }


 delAddress(id:string){
  this.srvc.delAddress(id).subscribe(res=>{
    window.alert(res.response)

    if(res.st ==1)
      this.srvc.getAddress(this.userId).subscribe(res =>this.data = res)
  })
 }
 selectAddress(id:string){
   localStorage.setItem('addressId',id)
  this.router.navigateByUrl('/site/checkout')
 }



}


