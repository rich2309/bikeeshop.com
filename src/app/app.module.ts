import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// routing support
import { RoutingModule, AppRoutingProviders } from './app.routing';

// http support
import {HttpClientModule} from '@angular/common/http';

// cookie support
import { CookieService } from 'ngx-cookie-service';

// components
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { HomeComponent } from './components/home/home.component';
import {ProductDetailComponent} from './components/product_detail/product_detail.component';
import { ShoppingCartComponent } from './components/shopping-car/shopping-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    ProductDetailComponent,
    ShoppingCartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RoutingModule
  ],
  providers: [
    AppRoutingProviders,
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
