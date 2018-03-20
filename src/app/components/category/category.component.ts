import {Component, OnInit} from '@angular/core';
import { ProductsService } from '../../services/dao/products.service';
import { ActivatedRoute } from '@angular/router';
import { Products } from '../../entities/Products';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers: [ProductsService]
})
export class CategoryComponent implements OnInit {
  public product_list: Products[];
  public idCategory: any;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _productService: ProductsService
  ) {}

  ngOnInit() {
    this._route.params.subscribe(
      params => {
        this.paramsChanged(params['idCategory']);
      });
  }

  paramsChanged(idCategory: any) {
    this._productService.getProductsByCategory(idCategory).subscribe(
      result => {
        this.product_list = result;
      });
  }

}
