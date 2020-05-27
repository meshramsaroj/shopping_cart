import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../service/product/product.service';
import { ProductInterface } from 'src/app/interface/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList : ProductInterface;
  constructor(
    private service : ProductService
  ) { }

  ngOnInit(): void {
    this.productList = this.service.getProductList();

  }

}
