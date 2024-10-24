import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { filterOptions, WebApiService } from '../../services/web-api.service';
import { Product, StandingPlace } from '../../api-client';

@Component({
  selector: 'page-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  products: Product[] = [];
  currentPage = 0;
  loading = false; // Toevoegd om een loading lock te voorkomen.
  maxPagesReached = false;

  standingPlaceEnumKeys = Object.keys(StandingPlace);
  searchFilterParams: filterOptions = {};

  @ViewChild('scrollAnchor', { static: true }) scrollAnchor!: ElementRef;

  constructor(private readonly webApi: WebApiService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    if (this.loading || this.maxPagesReached) return;

    this.loading = true;
    this.webApi.getProducts(this.currentPage).subscribe(newProducts => {
      if (newProducts.products.length > 0) {
        this.products = [...this.products, ...newProducts.products];
        this.currentPage++; // Loopt door pages tot de producten array leeg is.
      } else {
        this.maxPagesReached = true;
      }
      this.loading = false;
    });
  }

  search() {
    console.log(this.searchFilterParams);
    this.webApi.getProducts(0, this.searchFilterParams).subscribe(newProducts => {
      this.products = newProducts.products;
    });
  }
}
