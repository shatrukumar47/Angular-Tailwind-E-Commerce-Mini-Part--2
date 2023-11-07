import { Component, Input } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-wishlist-card',
  templateUrl: './wishlist-card.component.html',
  styleUrls: ['./wishlist-card.component.css'],
})
export class WishlistCardComponent {
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

  @Input() removeProductWishlist: any;

  // handleRemoveBtn() {
  //   this.removeProductWishlist(this.item.id)
  // }

  handleAddToCart() {
    let cartData: any = localStorage.getItem('cart') || [];
    if (cartData.length === 0) {
      cartData.unshift(this.item);
      alert('Successfully added to cart.');
      localStorage.setItem('cart', JSON.stringify(cartData));
    } else {
      cartData = JSON.parse(cartData);
      if (this.checkDuplication(cartData, this.item)) {
        alert('Already added into cart!');
      } else {
        cartData.unshift(this.item);
        alert('Successfully added to cart.');
        localStorage.setItem('cart', JSON.stringify(cartData));
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
