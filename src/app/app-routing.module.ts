import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductdetailComponent } from './pages/productdetail/productdetail.component';

const routes: Routes = [
  { path: '', component: HomeComponent },  // Home page displaying products
  { path: 'product/:id', component: ProductdetailComponent },  // Product details page
  { path: '**', redirectTo: '' }  // Redirect any unknown paths to home
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
