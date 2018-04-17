import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { API_GLOBALS } from '../../../../appconfig';

@Injectable()
export class CategoriesService {
  private httpOptions: Object;

  constructor(
    public http: HttpClient
  ) {
    this.httpOptions = {
      headers: new HttpHeaders({ 'Accept': 'application/json' })
    };
  }

  getCategories(page: number, limit: number): Observable<any> {
    return this.http.get(
      API_GLOBALS.url +
      API_GLOBALS.source_urn.category,
      this.httpOptions
    );
  }

}
