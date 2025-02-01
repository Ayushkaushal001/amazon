import { Component } from '@angular/core';
import { FormGroup, FormControl , FormBuilder,Validators} from '@angular/forms';
import {UserService} from '../../services/user.service'
@Component({
  selector: 'app-resetpwd',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent {
form: FormGroup;
msg = '';
constructor(private fb: FormBuilder,private srvc:UserService) {
this.form = this.fb.group({
code: ['', Validators.required],
  password: ['',[Validators.required,Validators.minLength(6)]],
cpassword: ['',[Validators.required,Validators.minLength(6)]]
});
}

onSubmit(){
  let code = localStorage.getItem("code");
   let emailId = localStorage.getItem("emailId") || '';
   if(this.form.value.code == code){
if(this.form.value.password == this.form.value.cpassword ){
  this.srvc.resetPwd(this.form.value,emailId).subscribe(res=>{
  this.msg=res.response;
   if(res.st==1)
    this.form.reset();

})
}
else{
this.msg = "Confirm password not matched";
}
}
else{
this.msg = "Code not matched";
}
}
}
