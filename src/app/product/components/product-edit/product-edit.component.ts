import { Component, OnInit, ViewChild } from '@angular/core';

import {
      ActivatedRoute, // help to read url data ":id"
      Router // help to nagivate to other page
} from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';
import { Brand } from '../../models/brand';

import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
 
  // #productForm="ngForm"
  @ViewChild("productForm")
  form: NgForm;


  product: Product = new Product();
  brands: Brand[] = [];


  // reset example
  clonedProduct: Product = new Product();


  constructor(private route: ActivatedRoute,
              private router: Router, 
              private productService: ProductService) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    console.log("ID is", id);

    if (id) {
      this.productService.getProduct(id)
           .subscribe (product => {
             this.product = product;
             // clone
             this.clonedProduct = Object.assign({}, product);
           });
    }

    this.productService.getBrands()
        .subscribe ( brands => {
          this.brands = brands;
        });

 
  }


  reset() {
    const clone = Object.assign({}, this.clonedProduct);

    this.form.reset(clone);
    this.product = clone;
  }

  gotoList() {
    this.router.navigateByUrl('/products/list');
  }

  saveProduct() {
    // check error, if error then return

    if (this.form.pristine) {
      alert(" No changes found, not saving..");
      return;
    }

    if (this.form.invalid) {
      alert("Invalid form ");
      return;
    }

    this.productService
        .saveProduct(this.product)
        .subscribe ( savedProduct => {

          // option 1: continue with same form
          this.product = savedProduct;
          this.clonedProduct = Object.assign({}, savedProduct);
          this.reset();

          // option 2: go to list 
          // this.gotoList();

        });
  }

}
