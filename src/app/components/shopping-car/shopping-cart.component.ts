import {Component, OnInit} from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Products } from '../../entities/Products';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  public products_in_cart: Products[];

  constructor(private cookieService: CookieService) {}

  ngOnInit() {
    if (this.cookieService.check('products_in_cart')) {
      this.products_in_cart = JSON.parse(this.cookieService.get('products_in_cart'));
    }

  }
}
