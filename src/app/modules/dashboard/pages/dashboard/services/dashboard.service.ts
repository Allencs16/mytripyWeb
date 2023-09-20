import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private url = environment.api_url

  constructor(
    protected http: HttpClient
  ) { }

  listUserInfo(){
    return this.http.get<any>(`${this.url}/user`, {
      headers: {
        CacheControl: 'no-cache',
        Pragma: 'no-cache',
        Expires: 'Sat, 01 Jan 2000 00:00:00 GMT',
        Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJicmVub2FsbGVuY3NAZ21haWwuY29tIiwiaXNzIjoibXl0cmlweSIsImV4cCI6MTY5NTQ1Mjk5Nn0.RUJwg5Kt2rY64K1eS1B14pvyxU_7WiNiN7T0x8NRkY0`
      }
    });
  }

}
