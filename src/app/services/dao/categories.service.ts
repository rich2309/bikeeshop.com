import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { API_GLOBALS } from '../globals';

@Injectable()
export class CategoriesService {

  constructor(
    public http: HttpClient
  ) {

    console.log('');
  }

  getCategories(): Observable<any> {
    return this.http.get(API_GLOBALS.url + API_GLOBALS.source_urn.category);
  }

}
