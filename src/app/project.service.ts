import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiBaseUrl } from 'src/environments/environment';
import { Addproject } from './models/addproject';
import { Project } from './models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private httpClient : HttpClient) {}

  GetAllProjectByUser(): Observable<any>{
    // Sans interceptor
    // var tokenHeader = new HttpHeaders({'Authorization':'Bearer '+ localStorage.getItem('token')});
    // return this.httpClient.get<any[]>(`${ApiBaseUrl}Project`, {headers : tokenHeader});

    // Avec interceptor
    return this.httpClient.get<Project[]>(`${ApiBaseUrl}Project`);
  }

  AddProject(data: any): Observable<any>{
    return this.httpClient.post<Addproject>(`${ApiBaseUrl}Project`, data);
  }

  DeleteProject(projectId: number): Observable<any>{
    return this.httpClient.delete(`${ApiBaseUrl}Project/`+ projectId);
  }
}
