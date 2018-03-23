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

// sweet-alert 2 support
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';

// components
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { HomeComponent } from './components/home/home.component';
import { ProductDetailComponent } from './components/product_detail/product_detail.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { CategoryComponent } from './components/category/category.component';
import {BannerComponent} from './components/banner/banner.component';
import { ProductInCartComponent } from './components/product_in_cart/product_in_cart.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    ProductDetailComponent,
    ShoppingCartComponent,
    CategoryComponent,
    BannerComponent,
    ProductInCartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RoutingModule,
    SweetAlert2Module.forRoot()
  ],
  providers: [
    AppRoutingProviders,
    CookieService,
    Dataservice
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
