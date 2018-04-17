import {Component, Input, OnInit} from '@angular/core';
// import { Router, ActivatedRoute, Params } from '@angular/router';
import { APP_CURRENCIES } from '../../services/globals';
import { ProductsService } from '../../services/dao/products.service';
import { Products } from '../../entities/Products';
import { CategoriesService } from '../../services/dao/categories.service';
import {Category} from '../../entities/Category';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
  providers: [ProductsService]
})
export class BannerComponent implements OnInit {
  @Input()
  public title_component: string;
  @Input()
  public idCategory: number;
  public image_list: any [];
  public category_list: Category[];

  constructor(private _categoryService: CategoriesService) {
    this._categoryService.getCategories(1, 3).subscribe(
      result => {
        this.category_list = result;
      },
      error => {
        console.log(<any>error);
      }
    );
    this.image_list = [
      {
        idCategory: 1,
        route: '../../../assets/img/banner_categorys/kids1.jpg',
        active: 1
      },
      {
        idCategory: 2,
        route: '../../../assets/img/banner_categorys/mountain1.jpg',
        active: 1
      },
      {
        idCategory: 4,
        route: '../../../assets/img/banner_categorys/bmx1.jpg',
        active: 1
      },
      {
        idCategory: 5,
        route: '../../../assets/img/banner_categorys/allterrain1.jpg',
        active: 1
      },
      {
        idCategory: 6,
        route: '../../../assets/img/banner_categorys/crusier1.jpg',
        active: 1
      },
    ];
  }

  ngOnInit() {}

}
