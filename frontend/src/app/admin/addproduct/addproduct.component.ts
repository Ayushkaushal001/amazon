import { Component } from '@angular/core';
import{BrandService} from '../../services/brand.service'
import {SubcategoryService} from '../../services/subcategory.service'
import { ProductService } from '../../services/product.service';
import{FormGroup, FormControl,FormBuilder,Validators} from '@angular/forms';
@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent {
form : FormGroup;
msg = "";

brands:any
products:any
categories:any


  constructor(private fb :FormBuilder , private srvc:BrandService, private ssrvc:SubcategoryService,private psrvc:ProductService){
 this.form = this.fb.group({
    title:['', Validators.required ],
    description:['',Validators.required],
    price:['',Validators.required],
    subcategory:['',Validators.required],
    mrp :['',Validators.required],
    spec:['',Validators.required],
     brand:['',Validators.required],
     features:['',Validators.required],
    image:[''],
 });
    this.srvc.getBrand().subscribe(res=>this.brands =res)
    this.ssrvc.getsubcategory().subscribe(res=>this.categories =res)
  }

onFileSelect(event:any){
    const file = (event.target as HTMLInputElement).files?.[0];
    this.form.patchValue({image:file });
    this.form.get('image')?.updateValueAndValidity()
   }

   
  
    

  onSubmit(){
    let category = ""
    let d = this.form.value
    this.ssrvc.getcategory(d.subcategory).subscribe(res=>{category = res.categoryId
 this.psrvc.newProduct(d.title,category,d.mrp,d.image, d.price, d.subcategory, d.description, d.spec,d.brand,d.features).subscribe(res=>{

  this.msg=res.response;
  if(res.st==1){
    this.form.reset();

    
   
}


    })
  })
  }
 
}
