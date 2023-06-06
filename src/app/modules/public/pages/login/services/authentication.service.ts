import { GenericService } from 'src/app/services/generic.service';
import { environment } from './../../../../../../environments/environments';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private url = environment.api_url;

  constructor(
    protected http: HttpClient, 
  ) { }

  authenticate(credentials: any){
    return this.http.post<any>(`${this.url}/authenticate`, credentials);
  }

  get token(){
    return sessionStorage.getItem("token");
  }

  getHeadersSkipError(): HttpHeaders {
    return new HttpHeaders().append('skip-error', 'true');
  }
}
