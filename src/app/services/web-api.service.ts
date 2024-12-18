import { Injectable } from '@angular/core';
import { PageOfProducts, Product, ProductsClient, StandingPlace } from '../api-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebApiService {

  constructor(private client: ProductsClient) {}

  // De api-client is gegenereerd door nswag met de volgende command:
  // nswag openapi2tsclient /input:https://jemid-warmupapi.azurewebsites.net/swagger/v1/swagger.json /output:frontend/src/app/api-client.ts
  getProducts(pageNumber: number, filterOptions?: filterOptions): Observable<PageOfProducts> {
    return this.client.getProducts(10, pageNumber, // Ik haal hier 10 producten op omdat ik al van te voren weet dat er maar 10 producten zijn. Mijn idee was nog om lazy loading toe te voegen die telkens een pagina genereerde tot er niks meer op te halen valt.
      filterOptions?.textQuery,
      filterOptions?.standingPlace,
      filterOptions?.minHeight,
      filterOptions?.maxHeight,
      filterOptions?.minDiameter,
      filterOptions?.maxDiameter
    ); // Alle optionele parameters inladen voor de API.
  }

  // Voor de productdetail pagina
  getProductById(productId: number): Observable<Product> {
    return this.client.getProductById(productId);
  }
}

export interface filterOptions {
  textQuery?: string;
  minHeight?: number;
  maxHeight?: number;
  minDiameter?: number;
  maxDiameter?: number;
  standingPlace?: StandingPlace[];
}
