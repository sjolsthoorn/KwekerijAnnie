import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { WebApiService } from '../../services/web-api.service';
import { Product } from '../../api-client';

@Component({
  selector: 'page-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  products: Product[] = [];
  currentPage = 0;
  loading = false;
  maxPagesReached = false;

  @ViewChild('scrollAnchor', { static: true }) scrollAnchor!: ElementRef;

  constructor(private readonly webApi: WebApiService) {}

  ngOnInit(): void {
    this.loadInitialProducts();
    this.setupIntersectionObserver();
  }

  loadInitialProducts(): void {
    this.loadUntilScrollable();
  }

  loadUntilScrollable(): void {
    if (this.maxPagesReached || this.loading) return;

    this.loading = true;
    this.webApi.getProducts(this.currentPage).subscribe(newProducts => {
      if (newProducts.products.length > 0) {
        this.products = [...this.products, ...newProducts.products];
        this.currentPage++;
        this.loading = false;

        if (!this.isPageScrollable()) {
          this.loadUntilScrollable();
        }
      } else {
        console.log('No more products!');
        this.maxPagesReached = true;
        this.loading = false;
      }
    });
  }

  loadProducts(): void {
    if (this.loading || this.maxPagesReached) return;

    this.loading = true;
    this.webApi.getProducts(this.currentPage).subscribe(newProducts => {
      if (newProducts.products.length > 0) {
        this.products = [...this.products, ...newProducts.products];
        this.currentPage++;
      } else {
        console.log('No more products!');
        this.maxPagesReached = true;
      }
      this.loading = false;
    });
  }

  isPageScrollable(): boolean {
    return document.documentElement.scrollHeight > document.documentElement.clientHeight;
  }

  setupIntersectionObserver(): void {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !this.loading && !this.maxPagesReached) {
        this.loadProducts();
      }
    });

    observer.observe(this.scrollAnchor.nativeElement);
  }
}
