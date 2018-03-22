import {Component, Input, OnInit} from '@angular/core';
import { ProductsService } from '../../services/dao/products.service';
import { ActivatedRoute } from '@angular/router';
import { APP_CURRENCIES } from '../../services/globals';
import { CookieService } from 'ngx-cookie-service';
import { Products } from '../../entities/Products';
import { Dataservice } from '../../services/dataservice';
import swal from 'sweetalert2';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product_detail.component.html',
  styleUrls: ['./product_detail.component.css'],
  providers: [ProductsService, CookieService]
})

export class ProductDetailComponent implements OnInit {
  public currency: string;
  @Input()
  public product: Products;
  public idProduct: any;

 constructor(
    private _serviceData: Dataservice,
    private _productService: ProductsService,
    private _route: ActivatedRoute,
    private _cookieService: CookieService
  ) {
    this.currency = APP_CURRENCIES.euro;
  }
  ngOnInit () {
    this._route.params.subscribe(
      params => {
        this.idProduct = params['idProduct'];
      });

    this._productService.getProduct(this.idProduct).subscribe(
      result => {
        this.product = JSON.parse(JSON.stringify(result));
      });
  }

  addProductToCart(product: Products): void {
    if (!this._cookieService.check('shopping_cart')) {
      const shopping_cart = Array<Products>();
      shopping_cart.push(product);
      this._cookieService.set('shopping_cart', JSON.stringify(shopping_cart));
    } else {
      const shopping_cart = JSON.parse(this._cookieService.get('shopping_cart'));
      shopping_cart.push(product);
      this._cookieService.set('shopping_cart', JSON.stringify(shopping_cart));
    }
    swal('added to your cart', '', 'success');
  }
}


