import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css'],
})
export class WishlistComponent implements OnInit {
  wishlistData: Product[] = [];

  constructor(private cdRef: ChangeDetectorRef){}

  ngOnInit(): void {
    const data = localStorage.getItem('wishlist');
    if (data) {
      this.wishlistData = JSON.parse(data);
    }
  }

  removeProductWishlist = (id: number)=> {
    const data = localStorage.getItem('wishlist');
    if (data) {
      this.wishlistData = JSON.parse(data);
      this.wishlistData = this.wishlistData.filter((item) => item.id !== id);
      console.log(this.wishlistData)
      localStorage.setItem('wishlist', JSON.stringify(this.wishlistData));
      this.cdRef.detectChanges();
    }
  }
}
