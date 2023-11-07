import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CardComponent } from './card/card.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { FormsModule } from '@angular/forms';
import { WishlistComponent } from './wishlist/wishlist.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { WishlistCardComponent } from './wishlist-card/wishlist-card.component';

const appRoutes: Routes = [
  {path: "", component: ProductsComponent},
  {path: "wishlist", component: WishlistComponent},
  {path:"cart", component: CartPageComponent},
  {path:"single-product", component: ProductDetailsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    CardComponent,
    ProductsComponent,
    ProductDetailsComponent,
    WishlistComponent,
    CartPageComponent,
    WishlistCardComponent,
  ],
  imports: [BrowserModule, HttpClientModule, FormsModule, RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
