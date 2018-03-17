import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// importing components
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';
import {ProductDetailComponent} from './components/product_detail/product_detail.component';

const app_routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'product_detail', component: ProductDetailComponent}
];

export const AppRoutingProviders: any[] = [];
export const RoutingModule: ModuleWithProviders = RouterModule.forRoot(app_routes);
