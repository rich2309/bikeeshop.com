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
        route: '../../../assets/img/kids/kids1.jpg',
        active: 1
      },
      {
        idCategory: 1,
        route: '../../../assets/img/kids/kids2.jpg'
      },
      {
        idCategory: 2,
        route: '../../../assets/img/mountain/mountain1.jpg',
        active: 1
      },
      {
        idCategory: 2,
        route: '../../../assets/img/mountain/mountain2.jpg'
      },
      {
        idCategory: 4,
        route: '../../../assets/img/bmx/bmx1.jpg',
        active: 1
      },
      {
        idCategory: 4,
        route: '../../../assets/img/bmx/bmx2.jpg'
      },
      {
        idCategory: 5,
        route: '../../../assets/img/allterrain/allterrain1.jpg',
        active: 1
      },
      {
        idCategory: 6,
        route: '../../../assets/img/crusier/crusier1.jpg',
        active: 1
      },
      {
        idCategory: 6,
        route: '../../../assets/img/crusier/crusier2.jpg'
      }
    ];
  }

  ngOnInit() {}

}
