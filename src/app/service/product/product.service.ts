import { Injectable } from '@angular/core';
import * as data from '../../component/shopping-cart/product-list/product-data.json';
import { ProductInterface } from '../..//interface/product.js';
// import { Product } from 'src/app/model/product.js';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  Product : ProductInterface ;

  constructor() { }

  getProductList() {
    this.Product = (data as any).default;
    return this.Product ;
  }
}
