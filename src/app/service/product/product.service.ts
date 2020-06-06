import { Injectable } from '@angular/core';
import { ProductInterface } from '../..//interface/product.js';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { productUrl } from 'src/config/api.js';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http : HttpClient
  ) { }

  getProductList():Observable<ProductInterface> {
   return this.http.get<ProductInterface>(productUrl);

  }
}
