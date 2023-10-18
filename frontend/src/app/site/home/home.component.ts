import { Component,OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import {CategoryService} from '../../services/category.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
 
 categories:any
 products:any


 constructor(private psrvc:ProductService , private csrvc : CategoryService) {
 this.csrvc.getCategory().subscribe(res=>this.categories =res);

 this.psrvc.getRecent().subscribe(res=>this.products =res);
 
}

ngOnInit() {
const scrollButton = document.getElementById('scrollButton');


if (scrollButton) {
  scrollButton.addEventListener('click', () => {
    window.scrollTo({ top:1200});
  });
}
}
}

