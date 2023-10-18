import { Component } from '@angular/core';
import{ActivatedRoute} from '@angular/router';
import{BrandService} from '../../services/brand.service'
import {SubcategoryService} from '../../services/subcategory.service'
import { ProductService } from '../../services/product.service';
import{FormGroup, FormControl,FormBuilder,Validators} from '@angular/forms';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent {
 form : FormGroup;
msg = "";
pId = "";
brands:any
product:any
categories:any
 imageSelected = false

  constructor(private fb :FormBuilder , private srvc:BrandService, private ssrvc:SubcategoryService,private psrvc:ProductService , private route:ActivatedRoute){
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

    
 this.route.params.subscribe(p=>{this.pId= p['id'];
      this.psrvc.getproduct(this.pId).subscribe(res=>{this.product =res;
        console.log(this.product)
        this.form.setValue({
            title:this.product.title,
            description:this.product.description,
            price:this.product.price,
            subcategory:this.product.subcategory,
            mrp:this.product.mrp,
            spec:this.product.spec,
            brand:this.product.brand,
            image:this.product.image,
            features:this.product.features,
        })
    })

})
  }

onFileSelect(event:any){
    const file = (event.target as HTMLInputElement).files?.[0];
    this.imageSelected =true;
    this.form.patchValue({image:file });
    this.form.get('image')?.updateValueAndValidity()
   }

   
  
    

  onSubmit(){
    let category = ""
    let d = this.form.value;
    if(this.imageSelected){
      console.log(d)
    this.ssrvc.getcategory(d.subcategory).subscribe(res=>{category = res.categoryId
 this.psrvc.updateProduct(d.title,category,d.mrp,d.image, d.price, d.subcategory, d.description, d.spec,d.brand,d.features,this.pId ).subscribe(res=>{
  this.msg=res.response;
  if(res.st==1){
  console.log(1) 
}
   })
  })
}
else {
console.log(d)
  
  this.ssrvc.getcategory(d.subcategory).subscribe(res=>{category = res.categoryId
    let data = {title:d.title,category:category , mrp:d.mrp ,price:d.price,subcategory:d.subcategory,description:d.description,spec:d.spec,brand:d.brand,features:d.features}
 this.psrvc.updateProductData(this.pId,data ).subscribe(res=>{
  this.msg=res.response;
  if(res.st==1){
     console.log(data)
}
   })
  })
  }
}
}
