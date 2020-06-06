import { Component, OnInit, Input } from '@angular/core';
import { MessangerService } from '../../../../service/messanger/messanger.service';
import { CartService } from '../../../../service/cart/cart.service';
import { WishlistService } from '../../../../service/wishlist/wishlist.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.css']
})
export class ProductListItemComponent implements OnInit {
  @Input() productItem: any;
  @Input() addedToWishlist: boolean;
  constructor(
    private msg: MessangerService,
    private cartService: CartService,
    private wishlistService: WishlistService
  ) { }

  ngOnInit(): void {

  }

  handleAddToCart() {
    this.cartService.addToCart(this.productItem).subscribe(() => {
      this.msg.sendMsg(this.productItem);
    })
  }



  handleAddToWishlist() {
    this.wishlistService.addToWishList(this.productItem.id).subscribe(()=>{
      this.addedToWishlist = true;
    })

  }

  handleRemoveFromWishlist() {
    this.wishlistService.removeFromWishList(this.productItem.id).subscribe(()=>{
      this.addedToWishlist = false;
    })

  }

  // viewDetail() {

  //   this.msg.sendMsg(this.productItem);
  // }

}
