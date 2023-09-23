import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class SigninService {
  private url = environment.api_url

  constructor(
    protected http: HttpClient
  ) { }

  createNewUser(user: any){
    return this.http.post<any>(`${this.url}/public/user/create`, user);
  }
}
