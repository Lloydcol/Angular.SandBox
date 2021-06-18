import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiBaseUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private httpClient : HttpClient) { }

  login(data: any): Observable<any>{
    return this.httpClient.post(`${ApiBaseUrl}Auth/login`, data);
  }

  register(data: any): Observable<any>{
    return this.httpClient.post(`${ApiBaseUrl}Auth/register`, data);
  }
}
