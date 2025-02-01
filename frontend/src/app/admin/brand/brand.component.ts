import { Component } from '@angular/core';
import{BrandService} from '../../services/brand.service'
import{FormGroup, FormControl,FormBuilder,Validators} from '@angular/forms';
 @Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent {

form : FormGroup;
msg = "";

brands:any

  constructor(private fb :FormBuilder , private srvc:BrandService){
 this.form = this.fb.group({
    title:['', Validators.required ],
    description:['',Validators.required],
    image:[''],
 });
 this.getBrand()
  }

onFileSelect(event:any){
    const file = (event.target as HTMLInputElement).files?.[0];
    this.form.patchValue({image:file });
    this.form.get('image')?.updateValueAndValidity()
   }


 getBrand(){
    this.srvc.getBrand().subscribe(res=>this.brands =res)
   }
  
    delBrand(id:string){
    this.srvc.delBrand(id).subscribe(res=>{
      window.alert(res.response);
      if(res.st==1)
        this.getBrand();
    })
   }

  onSubmit(){
    const d = this.form.value
 this.srvc.newBrand(d.title,d.description,d.image ).subscribe(res=>{
  this.msg=res.response;
  if(res.st==1){
    this.form.reset();
   this.getBrand();
}


    })
  }
 

}
