import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { faWater, faUpDown, faSun } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-product-item-card',
  templateUrl: './productItemCard.component.html',
  styleUrl: './productItemCard.component.scss',
})
export class ProductItemCardComponent {
  faWater = faWater
  faHeight = faUpDown
  faSun = faSun

  constructor(private router: Router) {}

  @Input() imageUrl?: string;
  @Input() title?: string;
  @Input() price?: number;
  @Input() size?: number;
  @Input() height?: number;
  @Input() waterLevel?: string;
  @Input() maintenanceLevel?: string;
  @Input() productId?: number;

  navigateToDetailPage() {
    this.router.navigate([`/product/${this.productId}`]);
  }
}
