import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiBaseUrl } from 'src/environments/environment';
import { MailBase } from './models/mail-base';

@Injectable({
  providedIn: 'root'
})
export class MailerService {

  constructor(private httpClient : HttpClient) { }

  InviteUser(data: any){
    return this.httpClient.post<MailBase>(`${ApiBaseUrl}Mailer`, data);
  }
}
