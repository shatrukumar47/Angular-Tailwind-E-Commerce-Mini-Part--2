import { Component, Input } from '@angular/core';
import { Product } from '../models/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() item: Product = {
    id: 0,
    title: '',
    price: 0,
    description:'',
    category: "",
    image: '',
    rating: {
      rate: 0,
      count: 0,
    },
  };

  constructor(private router: Router) {}

  handleViewDetail() {
    localStorage.setItem('product', JSON.stringify(this.item));
    this.router.navigate(['/single-product']);
  }

  handleAddToCart() {
    let cartData: any = localStorage.getItem('cart') || [];
    if (cartData.length === 0) {
      cartData.unshift(this.item);
      alert("Successfully added to cart.")
      localStorage.setItem('cart', JSON.stringify(cartData));
    } else {
      cartData = JSON.parse(cartData);
      if (this.checkDuplication(cartData, this.item)) {
        alert('Already added into cart!');
      } else {
        cartData.unshift(this.item);
        alert("Successfully added to cart.")
        localStorage.setItem('cart', JSON.stringify(cartData));
      }
    }
  }

  handleWishlist() {
    let wishlistData: any = localStorage.getItem('wishlist') || [];
    if (wishlistData.length === 0) {
      wishlistData.unshift(this.item);
      alert("Successfully added to wishlist.")
      localStorage.setItem('wishlist', JSON.stringify(wishlistData));
    } else {
      wishlistData = JSON.parse(wishlistData);
      if (this.checkDuplication(wishlistData, this.item)) {
        alert('Already added into wishlist!');
      } else {
        wishlistData.unshift(this.item);
        alert("Successfully added to wishlist.")
        localStorage.setItem('wishlist', JSON.stringify(wishlistData));
      }
    }
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
