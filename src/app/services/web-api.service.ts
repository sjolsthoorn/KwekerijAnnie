import { Injectable } from '@angular/core';
import { PageOfProducts, ProductsClient } from '../api-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebApiService {

  constructor(private client: ProductsClient) {}

  getProducts(pageNumber: number): Observable<PageOfProducts> {
    return this.client.getProducts(4, pageNumber, null, null, null, null, null, null)
  }
}
