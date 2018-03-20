import {Component, Input, OnInit} from '@angular/core';
import { Products } from '../../entities/Products';
import { Dataservice } from '../../services/dataservice';
import { ProductsService } from '../../services/dao/products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product_detail.component.html',
  styleUrls: ['./product_detail.component.css'],
  providers: [ProductsService]
})
export class ProductDetailComponent implements OnInit {
  @Input()
  public product: Products;
  public idProduct: any;

  constructor(
    private _serviceData: Dataservice,
    private _productService: ProductsService,
    private _route: ActivatedRoute
  ) {}
  ngOnInit () {

    this._route.params.subscribe(
      params => {
        this.idProduct = params['idProduct'];
      }, error => {
        console.log(<any>error);
      }
    );

    this._productService.getProduct(this.idProduct).subscribe(
      result => {
        this.product = JSON.parse(JSON.stringify(result));
        console.log(this.product);
      }, error => {
        console.log(<any>error);
      }
    );

  }
}
