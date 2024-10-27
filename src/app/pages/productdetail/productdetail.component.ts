import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WebApiService } from '../../services/web-api.service';
import { Product } from '../../api-client';
import { faWater, faUpDown, faSun } from '@fortawesome/free-solid-svg-icons';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.scss']
})
export class ProductdetailComponent implements OnInit {
  productId!: number;
  product?: Product;

  faWater = faWater;
  faHeight = faUpDown;
  faSun = faSun;

  constructor(private route: ActivatedRoute, private webApiService: WebApiService) {}

  ngOnInit(): void {
    this.route.params.pipe(take(1)).subscribe(params => {
      this.productId = +params['id'];
      this.loadProduct();
    });
  }

  loadProduct(): void {
    this.webApiService.getProductById(this.productId).subscribe(
      product => {
        this.product = product;
      },
      error => {
        console.error('Error fetching product:', error);
      }
    );
  }

  navigateBack(): void {
    window.history.back();
  }
}
