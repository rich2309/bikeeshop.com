import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// importing components
import { HomeComponent } from './components/home/home.component';
import { ProductDetailComponent } from './components/product_detail/product_detail.component';
import { ShoppingCartComponent } from './components/shopping-car/shopping-cart.component';
import {CategoryComponent} from './components/category/category.component';

const app_routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'details/:idProduct', component: ProductDetailComponent},
  {path: 'cart', component: ShoppingCartComponent},
  {path: 'category/:idCategory', component: CategoryComponent}
];

export const AppRoutingProviders: any[] = [];
export const RoutingModule: ModuleWithProviders = RouterModule.forRoot(app_routes);
