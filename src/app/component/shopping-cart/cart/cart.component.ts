import { Component, OnInit } from '@angular/core';
import { MessangerService } from '../../../service/messanger/messanger.service';
import { ProductInterface } from '../../../interface/product';
import { CartService } from '../../../service/cart/cart.service';
import { CartItem } from '../../../interface/cart.item';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItem = [];
  cartTotal = 0;

  constructor(
    private msg: MessangerService,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.handleSubscription();
    this.loadToCart();

  }

  handleSubscription() {
    this.msg.getMsg().subscribe((product: ProductInterface) => {
      this.loadToCart();
    })

  }

  loadToCart() {
    this.cartService.getCartItem().subscribe((item: CartItem[]) => {
      this.cartItem = item;
      this.calculateTotal();

    })

  }

  calculateTotal() {
    this.cartTotal = 0;
    this.cartItem.forEach(item => {
      this.cartTotal += (item.product.price * item.product.quantity);
    });

  }

  deleteFromCart(productId) {
    this.cartService.removeFromCart(productId).subscribe((item) => {

    })
    this.cartItem = this.cartItem.filter(item => item.product !== productId.product);
    this.cartTotal = this.cartTotal - productId.product.price;

  }



}
