import { Injectable } from '@angular/core';
import { wishlistUrl } from '../../../config/api';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor(
    private http: HttpClient
  ) { }

  getWishlist() {
   return this.http.get(wishlistUrl).pipe(
      map((result: any[]) => {
        let wishlistProduct = [];
        result.forEach(item => {
          wishlistProduct.push(item.id);
        });

        return wishlistProduct;

      })
    )
  }

  addToWishList(productId) {
    return this.http.post(wishlistUrl, { id: productId });
  }

  removeFromWishList(productId) {
    return this.http.delete(wishlistUrl + '/' + productId);
  }
}
