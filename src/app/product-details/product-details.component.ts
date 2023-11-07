import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import {Router} from "@angular/router";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product: any;

  constructor(private router: Router){}

  ngOnInit(): void {
    const data = localStorage.getItem('product');
    if (data) {
      this.product = JSON.parse(data);
    } else {
      console.log('Something went wrong !');
    }
  }

  handleWishlist() {
    let wishlistData: any = localStorage.getItem('wishlist') || [];
    if (wishlistData.length === 0) {
      wishlistData.unshift(this.product);
      alert('Successfully added to wishlist.');
      localStorage.setItem('wishlist', JSON.stringify(wishlistData));
    } else {
      wishlistData = JSON.parse(wishlistData);
      if (this.checkDuplication(wishlistData, this.product)) {
        alert('Already added into wishlist!');
      } else {
        wishlistData.unshift(this.product);
        alert('Successfully added to wishlist.');
        localStorage.setItem('wishlist', JSON.stringify(wishlistData));
      }
    }
  }

  handleBuyNow(){
    const data:any = localStorage.getItem("cart") || [];
    if(data.length === 0){
      const cartData = JSON.parse(data);
      cartData.push(this.product);
      localStorage.setItem("cart", JSON.stringify(cartData));
    }else{
      const cartData = JSON.parse(data);
      cartData.unshift(this.product);
      localStorage.setItem("cart", JSON.stringify(cartData));
    }
    this.router.navigate(["/cart"]);
  }

  checkDuplication(array: Product[], product: Product): boolean {
    for (let item of array) {
      if (item.id === product.id) {
        return true;
      }
    }
    return false;
  }
}
