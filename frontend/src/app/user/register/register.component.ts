import { Component } from '@angular/core';
import { FormGroup, FormControl , FormBuilder,Validators} from '@angular/forms';
import {UserService} from '../../services/user.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
form: FormGroup;
msg ='';
constructor(private fb: FormBuilder,private srvc:UserService) {
this.form = this.fb.group({
firstName: ['', [Validators.required,Validators.pattern('[A-Za-z]{2,20}')]],
  lastName: ['',Validators.pattern('[A-Za-z]{2,20}')],
  emailId: ['', [Validators.required,Validators.email] ],
  phoneNo: ['', [Validators.required,Validators.pattern('[0-9]{10}')]],
  password: ['',[Validators.required,Validators.minLength(6)]],
});
}

onSubmit(){
this.srvc.registerUser(this.form.value).subscribe(res=>{
  this.msg=res.response;
    if(res.st==1)
    this.form.reset();
})
}



}
