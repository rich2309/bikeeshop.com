import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// forms support
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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

// pipes
import { FillPipe } from './pipes/fill.pipe';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    ProductDetailComponent,
    ShoppingCartComponent,
    CategoryComponent,
    BannerComponent,
    ProductInCartComponent,
    FillPipe
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
    RoutingModule,
    SweetAlert2Module.forRoot()
  ],
  providers: [
    AppRoutingProviders,
    CookieService,
    Dataservice,
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
