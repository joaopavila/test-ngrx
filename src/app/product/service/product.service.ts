import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  private readonly API_URL = `http://localhost:3000`;

  constructor(private http: HttpClient) { }

  getProduct() {
    return this.http.get(`${this.API_URL}/product`);
  }
}
