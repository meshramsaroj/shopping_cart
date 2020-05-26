import { Component, OnInit } from '@angular/core';
import * as data from '../product-data.json';

@Component({
  selector: 'app-product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.css']
})
export class ProductListItemComponent implements OnInit {
products : Object
  constructor() { }

  ngOnInit(): void {

    this.products = (data as any).default;
    console.log(this.products);
  }

}
