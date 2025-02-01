import { Component } from '@angular/core';
import { FormGroup, FormControl , FormBuilder,Validators} from '@angular/forms';
import {AdminService} from '../../services/admin.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
form: FormGroup;
msg ='';
constructor(private fb: FormBuilder,private srvc:AdminService,private router: Router) {
this.form = this.fb.group({

  username: ['', [Validators.required] ],
password: ['',[Validators.required,Validators.minLength(4)]],
});
}

onSubmit(){
this.srvc.loginAdmin(this.form.value).subscribe(res=>{
  this.msg=res.response;
    if(res.st==1)
   {
    localStorage.setItem("adminId" ,res.adminId);
    this.router.navigateByUrl("/admin/adminheader");
   }
})
}


}

