 import { Component } from '@angular/core';
import { FormGroup, FormControl , FormBuilder,Validators} from '@angular/forms';
import {AddressService} from '../../services/address.service'
import{ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-editaddress',
  templateUrl: './editaddress.component.html',
  styleUrls: ['./editaddress.component.css']
})
export class EditaddressComponent {

form: FormGroup;
msg ='';
 userId =localStorage.getItem("userId")
aId  = ""

constructor(private fb: FormBuilder,private srvc:AddressService, private route:ActivatedRoute) {
  this.route.params.subscribe(p=>{this.aId= p['id'];
  this.srvc.getAddressById(this.aId).subscribe(res =>{
    console.log(res);
    this.form.setValue({
     address:res.address,
     area:res.area,
     city:res.city,
      landmark:res.landmark,
        pincode:res.pincode,
        
     })
  })
})
this.form = this.fb.group({
area: ['', Validators.required],
  address: ['',Validators.required],
  city: ['', Validators.required],
  landmark: ['', Validators.required],
  pincode: ['',[Validators.required,Validators.minLength(6)]],
});


}

onSubmit(){
this.srvc.updateAddress(this.form.value,this.aId).subscribe(res=>{
  console.log(res)
  this.msg=res.response;
    if(res.st==1)
   console.log(1)
})
}


}