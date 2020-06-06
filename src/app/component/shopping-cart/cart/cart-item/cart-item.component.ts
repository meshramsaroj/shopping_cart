import { Component, OnInit, InputDecorator, Input } from '@angular/core';
import { MessangerService } from '../../../../service/messanger/messanger.service';
import { CartService } from '../../../../service/cart/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input() itemData: any;
  totalItemPrice = 0;
  constructor(
    private msg: MessangerService,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.totalItemPrice = (this.itemData.product.price * this.itemData.id);

  }

  deleteFromCart(itemData) {
    this.msg.sendMsg(itemData);

  }

}
