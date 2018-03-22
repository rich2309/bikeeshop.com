import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// routing support
import { RoutingModule, AppRoutingProviders } from './app.routing';

// custom services
import { Dataservice } from './services/dataservice';

// http support
import {HttpClientModule} from '@angular/common/http';

// cookie support
import { CookieService } from 'ngx-cookie-service';

// components
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { HomeComponent } from './components/home/home.component';
import { ProductDetailComponent } from './components/product_detail/product_detail.component';
import { ShoppingCartComponent } from './components/shopping-car/shopping-cart.component';
import { CategoryComponent } from './components/category/category.component';
import {BannerComponent} from './components/banner/banner.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    ProductDetailComponent,
    ShoppingCartComponent,
    CategoryComponent,
    BannerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RoutingModule
  ],
  providers: [
    AppRoutingProviders,
    CookieService,
    Dataservice
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
