import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { API_GEO_FR } from '../globals';

@Injectable()
export class FranceGeoService {

  constructor(
    public http: HttpClient
  ) {}

  getRegion(idRegion: string): Observable<any> {
    return this.http.get(
      API_GEO_FR.url + '/'
      + API_GEO_FR.source_urn.regions + '/' + idRegion
    );
  }

  getDepartement(idDepartment: string): Observable<any> {
    return this.http.get(
      API_GEO_FR.url + '/' +
      API_GEO_FR.source_urn.departements + '/' +
      idDepartment
    );
  }

  getCommunes(codePostal: string): Observable<any> {
    return this.http.get(
      API_GEO_FR.url + '/' +
      API_GEO_FR.source_urn.communes + '?codePostal=' +
      codePostal
    );
  }

}
