import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { BrandService } from '../../services/brand.service';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  d: any;
  brand: any;
  inCart: any;
  form!: FormGroup; 
  msg: any;
  productId = "";
  userId = localStorage.getItem("userId");
  priceComparison: any[] = []; // Array to hold price comparison data
  loadingPriceComparison: boolean = true; // Flag to indicate loading state

  constructor(
    private srvc: ProductService,
    private route: ActivatedRoute,
    private bsrvc: BrandService,
    private fb: FormBuilder,
    private csrvc: CartService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      quantity: ['1', Validators.required],
    });

    this.route.params.subscribe(params => {
      const id = params['id'];
      this.srvc.getproduct(id).subscribe(res => {
        this.d = res;
        this.productId = res._id;
        this.bsrvc.getbrandbyId(this.d.brand).subscribe(brandRes => {
          this.brand = brandRes;
        });
        this.csrvc.inCart(this.userId, this.d._id).subscribe(cartRes => {
          this.inCart = cartRes;
        });

        // Fetch price comparison data using product name instead of product ID
        this.fetchPriceComparison(this.d.title); // Fetch based on product title
      });
    });
  }

  fetchPriceComparison(productName: string) {
    this.srvc.getPriceComparison(productName).subscribe(data => {
      this.priceComparison = data; // Assign fetched data to the priceComparison array
      this.loadingPriceComparison = false; // Set loading to false
    }, error => {
      console.error('Error fetching price comparison:', error);
      this.loadingPriceComparison = false; // Set loading to false even on error
    });
  }

  onSubmit(): void {
    const data = {
      title: this.d.title,
      image: this.d.image,
      mrp: this.d.mrp,
      price: this.d.price,
      quantity: this.form.value.quantity,
      userId: this.userId,
      productId: this.d._id
    };

    this.csrvc.addItem(data).subscribe(res => {
      console.log(data);
      this.msg = res.response;
      if (res.st === 1) {
        window.location.reload();
      }
    });
  }

  moveToLogin(): void {
    localStorage.setItem('sproductId', this.productId);
    this.router.navigateByUrl('/user/login');
  }
}
