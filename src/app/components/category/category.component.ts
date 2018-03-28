import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
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
  public titleComponent: string;


  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _productService: ProductsService,
    private _titleService: Title
  ) {
    this.titleComponent = 'Search by category';
  }

  ngOnInit() {
    this._titleService.setTitle(this.titleComponent);
    this._route.params.subscribe(
      params => {
        this.paramsChanged(params['idCategory']);
      });
  }

  paramsChanged(idCategory: any) {
    this._productService.getProductsByCategory(idCategory).subscribe(
      result => {
        this.product_list = result;
        this.idCategory = idCategory;
      });
  }

}
