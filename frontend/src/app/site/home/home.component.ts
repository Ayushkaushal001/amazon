import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CategoryService } from '../../services/category.service';
import { BrandService } from '../../services/brand.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  categories: any;
  products: any[] = [];
  brands: any;
  currentPage: number = 1;
  itemsPerPage: number = 10;
  totalPages: number = 0;

  constructor(
    private psrvc: ProductService,
    private csrvc: CategoryService,
    private bsrvc: BrandService
  ) {}

  ngOnInit() {
    this.loadCategories();
    this.loadBrands();
    this.loadProducts(this.currentPage);
    this.initializeScrollButton();
  }

  loadCategories() {
    this.csrvc.getCategory().subscribe((res) => (this.categories = res));
  }

  loadBrands() {
    this.bsrvc.getBrand().subscribe((res) => (this.brands = res));
  }

loadProducts(page: number) {
  this.psrvc.getProducts(page, this.itemsPerPage).subscribe((response) => {
    console.log('API Response:', response); 
    this.products = response.products;
    this.totalPages = response.totalPages;
    this.currentPage = response.currentPage;
  });
}

  setPage(page: number) {
    if (page > 0 && page <= this.totalPages) {
      this.loadProducts(page);
    }
  }

  initializeScrollButton() {
    const scrollButton = document.getElementById('scrollButton');
    if (scrollButton) {
      scrollButton.addEventListener('click', () => {
        window.scrollTo({ top: 1600 });
      });
    }
  }
}
