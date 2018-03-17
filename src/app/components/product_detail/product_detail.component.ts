import {Component, Input, OnInit} from '@angular/core';
import {Products} from '../../entities/Products';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product_detail.component.html',
  styleUrls: ['./product_detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  @Input()
  public product: Products;

  constructor() {
  }
  ngOnInit () {}
}
