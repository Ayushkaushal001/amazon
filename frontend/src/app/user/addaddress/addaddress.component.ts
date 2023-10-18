import { Component } from '@angular/core';
import { FormGroup, FormControl , FormBuilder,Validators} from '@angular/forms';
import {AddressService} from '../../services/address.service'
@Component({
  selector: 'app-addaddress',
  templateUrl: './addaddress.component.html',
  styleUrls: ['./addaddress.component.css']
})
export class AddaddressComponent {
form: FormGroup;
msg ='';
 userId =localStorage.getItem("userId")

constructor(private fb: FormBuilder,private srvc:AddressService) {
this.form = this.fb.group({
area: ['', Validators.required],
  address: ['',Validators.required],
  city: ['', Validators.required],
  landmark: ['', Validators.required],
  pincode: ['',[Validators.required,Validators.minLength(6)]],
});
}

onSubmit(){
 let data = {userId:this.userId,area:this.form.value.area,address:this.form.value.address,city:this.form.value.city,landmark:this.form.value.landmark,pincode:this.form.value.pincode}
console.log(data)
this.srvc.postAddress(data).subscribe(res=>{
  console.log(res)
  this.msg=res.response;
    if(res.st==1)
    this.form.reset();
})
}


}
