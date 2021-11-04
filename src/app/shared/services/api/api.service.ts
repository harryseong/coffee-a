import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getCoffeeMakers(): Observable<any> {
    const headers = new HttpHeaders({});
    return this.http.get<any>(environment.aws.api.coffee.maker.apiUrl, {headers});
  }
}
