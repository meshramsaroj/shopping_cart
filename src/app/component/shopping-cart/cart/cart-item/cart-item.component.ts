import { Component, OnInit ,InputDecorator, Input} from '@angular/core';
import { MessangerService } from 'src/app/service/messanger/messanger.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input() itemData : any;
  constructor(
    private msg : MessangerService
  ) { }

  ngOnInit(): void {
  }

  deleteFromCart(itemData){
    this.msg.sendMsg(itemData);
    // console.log(itemData);



  }

}
