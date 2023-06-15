import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// rxjs
import { Observable } from 'rxjs';

@Injectable()
export class ProductsService {
  constructor(private readonly http: HttpClient) {}

  getProducts(): Observable<any> {
    return this.http.get('/products');
  }

  getProduct(productId: number): Observable<any> {
    return this.http.get(`/products/${productId}`);
  }
}
