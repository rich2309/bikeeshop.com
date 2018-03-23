import {Component, OnInit} from '@angular/core';
import { Products } from '../../entities/Products';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-product-in-cart',
  templateUrl: './product_in_cart.component.html',
  styleUrls: ['./product_in_cart.component.css']
})
export class ProductInCartComponent implements OnInit {
  public product: Products;

  constructor(
    private _cookieService: CookieService
  ) {}

  ngOnInit(): void {}

  removeFromCart() {}

}
