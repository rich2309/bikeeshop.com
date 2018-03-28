import {Component, OnInit} from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CookieService } from 'ngx-cookie-service';
import { Products } from '../../entities/Products';
import { APP_CURRENCIES } from '../../services/globals';
import swal from 'sweetalert2';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  public componentTitle: string;
  public products_in_cart: Array<Products>;
  public totalPrice: number;
  public quantities: any;
  public currency: string;

  constructor(
    private _cookieService: CookieService,
    private _titleService: Title
  ) {
    this.componentTitle = 'My shopping cart';
    this.currency = APP_CURRENCIES.euro;
    this.totalPrice = 0;
  }

  ngOnInit(): void {
    this._titleService.setTitle(this.componentTitle);
    if (this._cookieService.check('shopping_cart')) {
      this.products_in_cart = JSON.parse(this._cookieService.get('shopping_cart'));
      if (this.products_in_cart) {
        this.quantities = new Array(this.products_in_cart.length);
        this.quantities.fill(1, 0, this.products_in_cart.length);
        this.calculateFinalPrice();
      }
    }
  }

  calculateFinalPrice(): void {
    this.totalPrice = 0;
    this.products_in_cart.forEach(
      (product, index) => {
        const quantity = Number(this.quantities[index]);
        this.totalPrice += Number(product.price) * quantity;
      }
    );
  }

  selectQuantity(quantity: number, index: number): void {
    this.quantities.splice(index, 1, Number(quantity));
    this.calculateFinalPrice();
  }

  /**
   * Called for a button in view for ask if the product will be removed from cart
   * @param {Products} product
   */
  prepareRemove(product: Products): void {
    swal({
      title: 'Are you sure?',
      text: product.name + ' will be removed from your cart',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Remove it',
      customClass: 'swal-wide'
    }).then((result) => {
      if (result.value) {
        this.removeFromCart(product);
      }
    });
  }

  removeFromCart(product: Products): void {
    const indexProduct = this.products_in_cart.indexOf(product);
    this.removePrice(indexProduct);
    this._cookieService.set('shopping_cart', JSON.stringify(this.products_in_cart));
  }

  removePrice(indexProduct: number) {
    this.products_in_cart.splice(indexProduct, 1);
    this.quantities.splice(indexProduct, 1);
    if (this.products_in_cart.length === 0) {
      this.products_in_cart = null;
      this._cookieService.delete('shopping_cart');
    } else {
      this.calculateFinalPrice();
    }
  }
}
