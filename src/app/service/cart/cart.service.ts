import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CartItem } from '../../interface/cart.item';
import { cartUrl } from '../../../config/api';
import { ProductInterface } from '../../interface/product';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(
    private http: HttpClient
  ) { }

  getCartItem(): Observable<CartItem[]> {
    return this.http.get<CartItem[]>(cartUrl).pipe(
      map((result:any) => {
        let cartItems: CartItem[] = [];
        for (let item of result) {
          let productExist = false;
          for (let i in cartItems) {
            if (cartItems[i].product_id === item.product.product_id) {
              cartItems[i].quantity++;
              productExist = true;
              break;
            }
          }
          if (!productExist) {
            cartItems.push(item);
          }
        }
        return cartItems;
      })

    );
  }

  addToCart(product: ProductInterface): Observable<any> {
    return this.http.post(cartUrl, { product });
  }

  removeFromCart(products){
    return this.http.delete(cartUrl + '/' + products.product.product_id);

  }

}
