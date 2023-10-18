import { Component } from '@angular/core';
import{UserService} from './../../services/user.service';
import { FormGroup, FormControl , FormBuilder,Validators} from '@angular/forms';
@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent {
form: FormGroup;
msg = '';
userId =localStorage.getItem("userId")

constructor(private fb: FormBuilder,private srvc:UserService) {
this.form = this.fb.group({
password: ['',[Validators.required,Validators.minLength(6)]],
cpassword: ['',[Validators.required,Validators.minLength(6)]],
});
}
onSubmit(){
if(this.form.value.password == this.form.value.cpassword ){
  this.srvc.changepwd(this.userId,this.form.value).subscribe(res=>{
  this.msg=res.response;
   if(res.st==1)
    this.form.reset();

})
}
else{
this.msg = "Confirm password not matched";
}
}
}


