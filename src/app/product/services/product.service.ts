import { Injectable } from '@angular/core';

// get, post, delete, put data with localhost:7070
import {HttpClient} 
    from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { environment } 
          from '../../../environments/environment';
import { Product } from '../models/product';
import { Brand } from '../models/brand';



console.log("ENV ", environment)


@Injectable()
export class ProductService {

  constructor(private http: HttpClient) { 
      console.log("Product Service created");
  }

  getProducts(): Observable<Product[]> {
    // ajax calls
    return this.http.get<Product[]> (`${environment.apiEndPoint}/api/products`)
  }

  // DELETE /api/products/1234
  deleteProduct(id: any): Observable<any> {
    return this.http.delete(`${environment.apiEndPoint}/api/products/${id}`);
  }

  // /api/products/1234
  getProduct(id: any): Observable<Product> {
    return this.http.get<Product>(`${environment.apiEndPoint}/api/products/${id}`)
  }


  getBrands(): Observable<Brand[]> {
    // ajax calls
    return this.http.get<Brand[]> (`${environment.apiEndPoint}/api/brands`)
  }

  // PUT /api/products/100
  // {data in json format}

  // server returns saved data back

  // POST /api/products
  // {data in json format without id}

  // server returns saved data back with id

  saveProduct(product: Product): Observable<Product> {
    if (product.id) {
      // put
      return this.http.put<Product>(`${environment.apiEndPoint}/api/products/${product.id}`, product);
    }

    return this.http.post<Product>(`${environment.apiEndPoint}/api/products`, product);
    
    // post
  }

}
