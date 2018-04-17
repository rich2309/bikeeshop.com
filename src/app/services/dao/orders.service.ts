import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { API_GLOBALS } from '../../../../appconfig';
import { HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';


@Injectable()
export class OrdersService {

  constructor(
    private http: HttpClient
  ) {}

  makeOrder(params): Observable<any> {
    const product_list = [];
    params.product_list.forEach(product => {
      product_list.push(Number(product.idProduct));
    });
    const user = {
      'name': params.user.name,
      'lastname': params.user.lastname,
      'email': params.user.email,
      'address': params.user.adresse.street + ' ' + params.user.adresse.postal_code + ' ' + params.user.adresse.commune
    };
    const data_request = {
      'user': user,
      'product_list': product_list,
      'product_quantity': params.product_quantities,
      'total_price': params.total_price
    };
    const json_data = JSON.stringify(data_request);
    const data = 'data_request=' + json_data;
    const headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});
    return this.http.post(
      API_GLOBALS.url +
      API_GLOBALS.source_urn.orders,
      data, {headers: headers}
    ).map(result => JSON.parse(JSON.stringify(result)));
  }
}
