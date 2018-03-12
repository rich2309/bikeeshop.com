import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// importing components
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';

const app_routes: Routes = [
  {path: '', component: HomeComponent},
];

export const AppRoutingProviders: any[] = [];
export const RoutingModule: ModuleWithProviders = RouterModule.forRoot(app_routes);
