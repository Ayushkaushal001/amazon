import { Component } from '@angular/core';
import{FormGroup , FormBuilder,FormControl, Validators} from '@angular/forms';

import {UserService} from '../../services/user.service'

import{Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
form:FormGroup;
msg = "";

constructor(private srvc:UserService , private fb: FormBuilder, private router:Router){
  this.form = this.fb.group({

    emailId:['',[Validators.required,Validators.email]],
    password:['',[Validators.required,Validators.minLength(6)]],
  });
}
 

onSubmit(){
  this.srvc.loginUser(this.form.value).subscribe(res=>{
    this.msg = res.response;
    if(res.st ==1){
      localStorage.setItem("userId" , res.userId);
    let  productId =localStorage.getItem("sproductId") 
      if(!!productId){
        let url = "/site/product/" + productId;
      this.router.navigateByUrl(url)
      localStorage.removeItem('sproductId')
 }
 else{
  this.router.navigateByUrl("/site/home")
    }
 }
  })
}
}

