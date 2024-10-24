import { Injectable } from '@angular/core';
import { PageOfProducts, ProductsClient, StandingPlace } from '../api-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebApiService {

  constructor(private client: ProductsClient) {}

  getProducts(pageNumber: number, filterOptions?: filterOptions): Observable<PageOfProducts> {
    return this.client.getProducts(
      10,
      pageNumber,
      filterOptions?.textQuery || null,
      filterOptions?.standplaats?.length ? filterOptions.standplaats : null,
      filterOptions?.minHeight !== undefined ? filterOptions.minHeight : null,
      filterOptions?.maxHeight !== undefined ? filterOptions.maxHeight : null,
      filterOptions?.minDiameter !== undefined ? filterOptions.minDiameter : null,
      filterOptions?.maxDiameter !== undefined ? filterOptions.maxDiameter : null
    );
  }


  getProductById(productId: number) {
    return this.client.getProductById(productId);
  }
}

export interface filterOptions {
  textQuery?: string;
  minHeight?: number;
  maxHeight?: number;
  minDiameter?: number;
  maxDiameter?: number;
  standplaats?: StandingPlace[];
}
