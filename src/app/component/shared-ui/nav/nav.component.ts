import { Component, OnInit } from '@angular/core';
import { WishlistService } from '../../../service/wishlist/wishlist.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  wishlist: number[] = [];
  count = 0;
  constructor(
    private wishlistService: WishlistService
  ) { }

  ngOnInit(): void {

    this.loadWishlist();
    // this.count;
  }

  loadWishlist() {
    this.wishlistService.getWishlist().subscribe(itemIds => {
      this.wishlist = itemIds;
      this.count = this.wishlist.length;

    });
  }

}
