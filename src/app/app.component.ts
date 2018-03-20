import { Component, OnInit } from '@angular/core';
import { CategoriesService } from './services/dao/categories.service';
import { Category } from './entities/Category';
import { Dataservice } from './services/dataservice';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CategoriesService]
})
export class AppComponent implements OnInit {
  public title: string;
  public category_list: Category[];

  constructor(
    private _categoryService: CategoriesService,
    private _dataService: Dataservice,
    private _router: Router
  ) {
    this.title = 'Bikeeshop.com';
  }

  ngOnInit() {
    this._categoryService.getCategories().subscribe(
      result => {
        this.category_list = result;
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  productsInCategory(category: Category) {
    this._router.navigate(['category', category.idCategory]);
  }

}
