import { Component, Input, OnInit } from '@angular/core';
import { ProductsService } from '../../services/dao/products.service';
import { ActivatedRoute } from '@angular/router';
import { APP_CURRENCIES } from '../../../../appconfig';
import { CookieService } from 'ngx-cookie-service';
import { Products } from '../../entities/Products';
import { Dataservice } from '../../services/dataservice';
import swal from 'sweetalert2';
import 'hammerjs';

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
    this.product = new Products();
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

  /**
   * Add a product to the shopping cart
   * @param {Products} product
   *        An instance of Product
   */
  addProductToCart(product: Products): void {
    if (!this._cookieService.check('shopping_cart') && !this._cookieService.check('product_quantities')) {
      const shopping_cart = Array<Products>();
      shopping_cart.push(product);
      this._cookieService.set('shopping_cart', JSON.stringify(shopping_cart));
      const product_quantities = [];
      product_quantities.push(1);
      this._cookieService.set('product_quantities', JSON.stringify(product_quantities));
    } else {
      const shopping_cart = JSON.parse(this._cookieService.get('shopping_cart'));
      shopping_cart.push(product);
      this._cookieService.set('shopping_cart', JSON.stringify(shopping_cart));
      const product_quantities = JSON.parse(this._cookieService.get('product_quantities'));
      product_quantities.push(1);
      this._cookieService.set('product_quantities', JSON.stringify(product_quantities));
    }
    swal('added to your cart', '', 'success');
  }
}




