import { Component } from '@angular/core';
import { FormGroup, FormControl , FormBuilder,Validators} from '@angular/forms';
import{Router} from '@angular/router';

import{UserService} from '../../services/user.service';
@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.css']
})
export class ForgetComponent {
  form:FormGroup
  msg = ""
  constructor(private srvc:UserService , private router:Router , private fb:FormBuilder){
this.form = this.fb.group({

  emailId: ['', [Validators.required,Validators.email] ],
 
});
}

onSubmit(){
 let code= (Math.floor(1000 + Math.random()*9000)).toString();
 let emailId = this.form.value.emailId;
 let data = {emailId:this.form.value.emailId,code:code}
this.srvc.forgetPwd(data).subscribe(res=>{
  this.msg=res.response;
    if(res.st==1)
   {
    localStorage.setItem("emailId" ,emailId);
     localStorage.setItem("code" , code);
    this.router.navigateByUrl("/user/reset");
   }
})
}
}

