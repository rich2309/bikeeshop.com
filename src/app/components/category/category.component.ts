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
  public page: number;


  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _productService: ProductsService,
    private _titleService: Title
  ) {
    this.titleComponent = 'Search by category';
    this.page = 1;
    this.product_list = [];
  }

  ngOnInit() {
    this._titleService.setTitle(this.titleComponent);
    this.initComponentWithParams();
  }

  initComponentWithParams() {
    this._route.params.subscribe(
      params => {
        this.paramsChanged(params['idCategory'], this.page);
      });
  }

  nextPage() {
    this.page += 1;
    this.initComponentWithParams();
    if (this.product_list.length < 1) {
      this.backPage();
    }
  }

  backPage() {
    this.page = (this.page === 1) ? 1 : this.page -= 1;
    this.initComponentWithParams();
  }

  paramsChanged(idCategory: any, page: number) {
    this._productService.getProductsByCategory(idCategory, page, 3).subscribe(
      result => {
        this.product_list = result;
        this.idCategory = idCategory;
      });
  }

}
