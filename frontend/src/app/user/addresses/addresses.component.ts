import { Component } from '@angular/core';
import {AddressService} from '../../services/address.service'
@Component({
  selector: 'app-addresses',
  templateUrl: './addresses.component.html',
  styleUrls: ['./addresses.component.css']
})
export class AddressesComponent {
 data: any;
 userId =localStorage.getItem("userId")
  constructor(private srvc: AddressService) {
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
}
   
   