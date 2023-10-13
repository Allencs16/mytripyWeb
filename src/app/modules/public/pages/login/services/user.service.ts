import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Loading } from 'src/app/core/interfaces/loading.model';
import { User } from 'src/app/core/models/user.model';
import { configMap } from 'src/app/core/utils/config-map';
import { GenericService } from 'src/app/services/generic.service';

@Injectable({
  providedIn: 'root'
})
export class UserService extends GenericService<User> {

  constructor(
    httpClient: HttpClient
  ) {
    super(httpClient, 'user');
  }

  getUserByEmail(email: string, loading?: Loading): Observable<User>{
    return this.getHttpClient().get<User>(`${this.api}/${email}`, {headers: this.getHeadersMulti()})
    .pipe(configMap())
  }

  getUsers(){
    return this.getHttpClient().get(`${this.api}`).pipe(configMap());
  }
}
