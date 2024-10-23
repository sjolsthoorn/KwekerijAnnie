import { Component, Input } from '@angular/core';
import {MatTooltipModule} from '@angular/material/tooltip';
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

  @Input() imageUrl: string = "https://images.unsplash.com/photo-1549007953-2f2dc0b24019?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  @Input() title: string = "Strawberry";
  @Input() price: number = 193;
  @Input() size: number = 839;
  @Input() height: number = 12;
  @Input() waterLevel: string = "High";
  @Input() maintenanceLevel: string = "Low";
}
