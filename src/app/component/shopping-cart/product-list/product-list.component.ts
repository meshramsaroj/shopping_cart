import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../service/product/product.service';
import { ProductInterface } from '../../../interface/product';
import { WishlistService } from '../../../service/wishlist/wishlist.service';
import { subscribeOn } from 'rxjs/operators';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList: ProductInterface;
  wishlist: number[] =[];
  constructor(
    private service: ProductService,
    private wishlistService: WishlistService
  ) { }

  ngOnInit(): void {
    this.loadProduct();
    this.loadWishlist();

  }

  loadProduct() {
    this.service.getProductList().subscribe((product) => {
      this.productList = product;
    });

  }

  loadWishlist() {
    this.wishlistService.getWishlist().subscribe(productIds=> {
      this.wishlist = productIds;

    })
  }

}
