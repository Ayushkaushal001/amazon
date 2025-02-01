import { Component,OnInit} from '@angular/core';
import{ProductService} from '../../services/product.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  data: any[] = [];
  query: string = '';  // Store the search query

  constructor(private srvc: ProductService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Get the query from the route parameters and fetch the search results
    this.route.params.subscribe(params => {
      this.query = params['query'];
      if (this.query) {
        this.srvc.searchProduct(this.query).subscribe(result => {
          this.data = result;  // Store the search results
        });
      }
    });
  }
}
