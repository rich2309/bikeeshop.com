import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
// import { Router, ActivatedRoute, Params } from '@angular/router';
import { APP_CURRENCIES } from '../../services/globals';
import { ProductsService } from '../../services/dao/products.service';
import { Products } from '../../entities/Products';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ProductsService]
})
export class HomeComponent implements OnInit {

  public componentTitle: string;
  public product_list: Products[];
  public product_currency: string;

  constructor(
    // private _route: ActivatedRoute,
    // private _router: Router,
    private _productService: ProductsService,
    private _titleService: Title
  ) {
    this.componentTitle = 'Bikeeshop.com: The best bikes at the best prices';
    this.product_currency = APP_CURRENCIES.euro;
  }

  ngOnInit() {
    this._titleService.setTitle(this.componentTitle);
    this._productService.getProducts().subscribe(
      result => {
        this.product_list = result;
      },
      error => {
        console.log(<any>error);
      }
    );
  }

}
