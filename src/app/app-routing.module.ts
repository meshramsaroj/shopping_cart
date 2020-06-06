import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './component/shopping-cart/product-list/product-list.component';
import { ProductDetailsComponent } from './component/shopping-cart/product-list/product-details/product-details.component';


const routes: Routes = [
  {
    path: '',
    component:ProductListComponent
  },
  {
    path:'productDetail/:product_id',
    component:ProductDetailsComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
