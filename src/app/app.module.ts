import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { WebApiService } from './services/web-api.service';
import { ProductsClient } from './api-client';
import { ProductItemCardComponent } from './components/productItemCard/productItemCard.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './pages/home/home.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ProductdetailComponent } from './pages/productdetail/productdetail.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    ProductItemCardComponent,
    HomeComponent,
    ProductdetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    MatTooltipModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [WebApiService, ProductsClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
