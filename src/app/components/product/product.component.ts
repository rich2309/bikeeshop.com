import {Component, Input, OnInit} from '@angular/core';
import {Products} from '../../entities/Products';
import { APP_CURRENCIES } from '../../../../appconfig';
import { Dataservice } from '../../services/dataservice';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public currency: string;
  @Input()
  public product: Products;

  constructor(
    private _dataService: Dataservice,
    private _router: Router
  ) {
    this.currency = APP_CURRENCIES.euro;
  }

  ngOnInit () {}

  productDetails(product: Products) {
    this._router.navigate(['details', product.idProduct]);
  }
}
