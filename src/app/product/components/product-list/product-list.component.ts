import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],

  // create product service object for every product-list
  // instance
  // product-service life is controlled by product-list
  providers: [
  //  ProductService
  ]
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];

  constructor(private productService: ProductService) {
      console.log("Product List created");
   }

  fetchData() {
    this.productService
        .getProducts()
        .subscribe ( products => {
          // called after receving data
          console.log(products);
          this.products = products;
        });
  }

  ngOnInit() {
    this.fetchData();
  }

  deleteProduct(id: any) {
    this.productService
        .deleteProduct(id)
        .subscribe ( () => {
            console.log("product ", id, " destroyed");
            this.fetchData();
        });
  }

}
