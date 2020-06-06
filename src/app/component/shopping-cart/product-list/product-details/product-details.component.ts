import { Component, OnInit } from '@angular/core';
import { ProductInterface } from '../../../../interface/product';
import { MessangerService } from '../../../../service/messanger/messanger.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product : ProductInterface;

  constructor(
    private msg : MessangerService,
    private route : ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.msg.getMsg().subscribe((data: ProductInterface) =>{
     this.product = data;
    })
  }

}
