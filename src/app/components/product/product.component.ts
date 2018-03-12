import {Component, Input, OnInit} from '@angular/core';
import {Products} from '../../entities/Products';
import {APP_CURRENCIES} from '../../services/globals';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public currency: string;
  @Input()
  public product: Products;

  constructor() {
    this.currency = APP_CURRENCIES.euro;
  }

  ngOnInit () {}
}
