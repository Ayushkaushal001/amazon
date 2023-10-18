import { Component } from '@angular/core';
import { FormGroup, FormControl , FormBuilder,Validators} from '@angular/forms';
import {UserService} from '../../services/user.service'
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
form: FormGroup;
userId =localStorage.getItem("userId")
msg='';
constructor(private fb: FormBuilder,private srvc:UserService,) {
  console.log(this.userId);
  this.srvc.getUser(this.userId).subscribe(res =>{
    console.log(res);
    this.form.setValue({
     firstName:res.firstName,
     lastName:res.lastName,
     emailId:res.emailId,
      phoneNo:res.phoneNo,
       dob:res.dob,
        city:res.city,
         gender:res.gender,
     })
  })
this.form = this.fb.group({
firstName: ['', [Validators.required,Validators.pattern('[A-Za-z]{2,20}')]],
  lastName: ['',Validators.pattern('[A-Za-z]{2,20}')],
  emailId: ['', [Validators.required,Validators.email] ],
 
  phoneNo: ['', [Validators.required,Validators.pattern('[0-9]{10}')]],
  city: [''],
  dob:[''],
  gender:['']
});
}

onSubmit(){
this.srvc.updateProfile(this.form.value,this.userId,).subscribe(res=>{
  this.msg=res.response;
   

})
}
}
