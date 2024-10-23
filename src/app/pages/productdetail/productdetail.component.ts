import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WebApiService } from '../../services/web-api.service';
import { Product } from '../../api-client';
import { faWater, faUpDown, faSun } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrl: './productdetail.component.scss'
})
export class ProductdetailComponent implements OnInit {
  productId!: number;
  product?: Product;

  faWater = faWater
  faHeight = faUpDown
  faSun = faSun

constructor(private route: ActivatedRoute, private webApiService: WebApiService) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.productId = +params['id'];
    });

    this.webApiService.getProductById(this.productId).subscribe(product => {
      this.product = product;
    });
  }
}
