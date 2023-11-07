import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
  cartData: Product[] = [];
  totalPrice: number = 0;

  ngOnInit(): void {
    const data = localStorage.getItem("cart");
    if(data){
      this.cartData = JSON.parse(data);
    }
    this.calculateTotalPrice();
  }

  removeCartItem = (id: number)=>{
    this.cartData = this.cartData.filter((item)=> item.id !== id);
    localStorage.setItem("cart", JSON.stringify(this.cartData))
    this.calculateTotalPrice();
  }

  calculateTotalPrice(){
    this.totalPrice = 0;
    this.cartData.forEach((item)=>{
      this.totalPrice += item.price
    })
  }
}
