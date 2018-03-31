import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Products } from '../../entities/Products';
import { API_GLOBALS } from '../globals';

@Injectable()
export class ProductsService {

  constructor(
    public http: HttpClient
  ) {}

  getProducts(page: number, limit: number): Observable<any> {
    return this.http.get(
      API_GLOBALS.url +
      API_GLOBALS.source_urn.products +
      '/page/' + page +
      '/limit/' + limit
    );
  }

  getProduct(idProduct: number) {
    return this.http.get(API_GLOBALS.url + API_GLOBALS.source_urn.products + '/' + idProduct);
  }

  getProductsByCategory(idCategory: number, page: number, limit: number): Observable<any> {
    return this.http.get(
      API_GLOBALS.url +
      API_GLOBALS.source_urn.products +
      '/category/' + idCategory +
      '/page/' + page +
      '/limit/' + limit
    );
  }
}
