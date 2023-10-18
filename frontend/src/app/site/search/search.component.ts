import { Component } from '@angular/core';
import{ProductService} from '../../services/product.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
data:any;
query="";
constructor( private srvc:ProductService, private route: ActivatedRoute) { 
this.route.params.subscribe(res=>{
  this.query=res['query']
this.srvc.searchProduct(res['query']).subscribe(result=>this.data=result)})
}
}
