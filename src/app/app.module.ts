import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/shared-ui/header/header.component';
import { FooterComponent } from './component/shared-ui/footer/footer.component';
import { NavComponent } from './component/shared-ui/nav/nav.component';
import { ProductListComponent } from './component/shopping-cart/product-list/product-list.component';
import { FilterComponent } from './component/shopping-cart/filter/filter.component';
import { CartComponent } from './component/shopping-cart/cart/cart.component';
import { ShoppingCartComponent } from './component/shopping-cart/shopping-cart.component';
import { CartItemComponent } from './component/shopping-cart/cart/cart-item/cart-item.component';
import { ProductListItemComponent } from './component/shopping-cart/product-list/product-list-item/product-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    ShoppingCartComponent,
    ProductListComponent,
    FilterComponent,
    CartComponent,
    CartItemComponent,
    ProductListItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
