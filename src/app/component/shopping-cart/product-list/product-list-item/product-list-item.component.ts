import { Component, OnInit, InputDecorator, Input } from '@angular/core';
import { ProductInterface } from 'src/app/interface/product';
import { MessangerService } from 'src/app/service/messanger/messanger.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.css']
})
export class ProductListItemComponent implements OnInit {
  @Input() productItem: any;
  constructor(
    private msg: MessangerService
  ) { }

  ngOnInit(): void {

  }

  addToCart() {
    this.msg.sendMsg(this.productItem);
  }

}
