import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CRUDService {
  private apiURL: string = 'https://fakestoreapi.com/products';

  constructor(private http: HttpClient) {}

  //get Products
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiURL);
  }
}
