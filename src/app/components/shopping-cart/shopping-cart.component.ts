import {Component, OnInit} from '@angular/core';
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

  public products_in_cart: Products[];
  public totalPrice: number;
  public currency: string;

  constructor(private _cookieService: CookieService) {
    this.currency = APP_CURRENCIES.euro;
    this.totalPrice = 0;
  }

  ngOnInit() {
    if (this._cookieService.check('shopping_cart')) {
      this.products_in_cart = JSON.parse(this._cookieService.get('shopping_cart'));
      this.calculateFinalPrice();
    }
  }

  calculateFinalPrice(): void {
    this.products_in_cart.forEach(
      product => {
        this.totalPrice  += Number(product.price);
      });
  }


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
    const index = this.products_in_cart.indexOf(product);
    this.products_in_cart.splice(index, 1);
    this._cookieService.set('shopping_cart', JSON.stringify(this.products_in_cart));
    this.removePriceOf(product);
  }

  removePriceOf(product: Products) {
    this.totalPrice  -= Number(product.price);
    if (this.totalPrice === 0) {
      this.products_in_cart = null;
      this._cookieService.delete('shopping_cart');
    }
  }
}
