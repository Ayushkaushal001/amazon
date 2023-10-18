  import { Component } from '@angular/core';
import { FormGroup, FormControl , FormBuilder,Validators} from '@angular/forms';
import {SubcategoryService} from '../../services/subcategory.service'
import {CategoryService} from '../../services/category.service'
@Component({
  selector: 'app-subcategory',
  templateUrl: './subcategory.component.html',
  styleUrls: ['./subcategory.component.css']
})
export class SubcategoryComponent {
form : FormGroup;
msg ='';
subcategories:any
categories:any
constructor(private fb :FormBuilder,private srvc:SubcategoryService,private asrvc:CategoryService) {
this.form = this.fb.group({
subcategory: ['', [Validators.required]],
  categoryId: ['',Validators.required],

});
this.getsubcategory()
  this.asrvc.getCategory().subscribe(res=> this.categories=res)  
}



 getsubcategory(){
  this.srvc.getsubcategory().subscribe(res=> this.subcategories=res)  
}

delsubcategory(id:string){
  this.srvc.delsubcategory(id).subscribe(res=>{
    window.alert(res.response);
    if(res.st==1)
    this.getsubcategory();
  })  
}
onSubmit(){
this.srvc.addsubcategory(this.form.value).subscribe(res=>{
  this.msg=res.response;
    if(res.st==1)
    this.form.reset();
  this.getsubcategory()
})
}


}
