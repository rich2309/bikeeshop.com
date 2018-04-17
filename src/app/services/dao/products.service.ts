import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { API_GLOBALS } from '../../../../appconfig';

@Injectable()
export class ProductsService {
  private httpOptions: Object;

  constructor(
    private http: HttpClient
  ) {
    this.httpOptions = {
      headers: new HttpHeaders({ 'Accept': 'application/json' })
    };
  }

  getProducts(page: number, limit: number): Observable<any> {
    return this.http.get(
      API_GLOBALS.url +
      API_GLOBALS.source_urn.products +
      '/page/' + page +
      '/limit/' + limit, this.httpOptions
    );
  }

  getProduct(idProduct: number) {
    return this.http.get(API_GLOBALS.url + API_GLOBALS.source_urn.products + '/' + idProduct, this.httpOptions);
  }

  getProductsByCategory(idCategory: number, page: number, limit: number): Observable<any> {
    return this.http.get(
      API_GLOBALS.url +
      API_GLOBALS.source_urn.products +
      '/category/' + idCategory +
      '/page/' + page +
      '/limit/' + limit,
      this.httpOptions
    );
  }
}
