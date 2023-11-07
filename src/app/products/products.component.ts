import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { CRUDService } from '../services/crud.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  copyOfProducts:Product[] = [];
  sortBy: string = '';
  filterBy: string = '';

  constructor(private crudServices: CRUDService) {}
  ngOnInit(): void {
    this.crudServices.getProducts().subscribe((data) => {
      this.products = data;
      this.copyOfProducts = data;
    });
  }

  //handle Sorting
  sortByPrice() {
    if (this.sortBy === 'asc') {
      this.products = this.products.sort((a, b) => a.price - b.price);
    } else if (this.sortBy === 'desc') {
      this.products = this.products.sort((a, b) => b.price - a.price);
    } else {
      this.crudServices.getProducts().subscribe((data) => {
        this.products = data;
      });
    }
  }

  //handle Filtering
  filterByCategory() {
    this.products = this.copyOfProducts;
    if (this.filterBy) {
      this.products = this.products.filter((item): any => {
        if (item.category === (this.filterBy)) {
          return item;
        }
      });
    } else {
      this.crudServices.getProducts().subscribe((data) => {
        this.products = data;
      });
    }
  }
}
