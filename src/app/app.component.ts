import {Component, OnInit} from '@angular/core';
import { CategoriesService } from './services/dao/categories.service';
import {Category} from './entities/Category';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CategoriesService]
})
export class AppComponent implements OnInit {

  public category_list: Category[];

  constructor(
    private _categoryService: CategoriesService
  ) {}

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
}
