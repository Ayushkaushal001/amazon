   import { Component } from '@angular/core';
import { FormGroup, FormControl , FormBuilder,Validators} from '@angular/forms';
import {CategoryService} from '../../services/category.service'
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
form: FormGroup;
msg ='';
categories:any
constructor(private fb: FormBuilder,private srvc:CategoryService) {
this.form = this.fb.group({
title: ['', [Validators.required,Validators.pattern('[A-Za-z]{2,20}')]],
  description: ['',Validators.required],
  image: [''], 
});
this.getCategory()
}
onFileSelect(event:any){
    const file = (event.target as HTMLInputElement).files?.[0];
    this.form.patchValue({image:file });
    this.form.get('image')?.updateValueAndValidity()
   }


 getCategory(){
  this.srvc.getCategory().subscribe(res=> this.categories=res)  
}

delCategory(id:string){
  this.srvc.delCategory(id).subscribe(res=>{
    window.alert(res.response);
    if(res.st==1)
    this.getCategory();
  })  
}
onSubmit(){
this.srvc.newCategory(this.form.value.title,this.form.value.description,this.form.value.image ).subscribe(res=>{
  this.msg=res.response;
    if(res.st==1)
    this.form.reset();
  this.getCategory();
})
}


}

