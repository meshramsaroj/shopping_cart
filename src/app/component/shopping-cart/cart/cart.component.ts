import { Component, OnInit } from '@angular/core';
import { MessangerService } from 'src/app/service/messanger/messanger.service';
import { ProductInterface } from 'src/app/interface/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItem = [];
  cartTotal = 0;

  constructor(
    private msgService: MessangerService
  ) { }

  ngOnInit(): void {
    this.msgService.getMsg().subscribe((product: ProductInterface) => {
      this.addProductToCart(product);
    })


  }

  addProductToCart(product: ProductInterface) {
    let productExist = false;
    for (let i in this.cartItem) {
      if (this.cartItem[i].productId === product.product_id) {
        this.cartItem[i].quantity++;
        productExist = true;
        break;
      }
    }

    if (!productExist) {
      this.cartItem.push({
        productId: product.product_id,
        productPrice: product.price,
        quantity: 1,
        productTips: product.tips
      });
    }
    this.cartTotal = 0;
    this.cartItem.forEach(item => {
      this.cartTotal += (item.productPrice * item.quantity);
    });
  }

  deleteFromCart(product) {
    this.cartItem = this.cartItem.filter(item =>  item !== product);
    this.cartTotal=  this.cartTotal - product.productPrice;

  }



}
