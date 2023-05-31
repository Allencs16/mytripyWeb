import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Loading } from 'src/app/core/interfaces/loading.model';
import { User } from 'src/app/core/models/user.model';
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

  getUserByEmail(email: string): Observable<User>{
    return this.getHttpClient().get<User>(`${this.api}/${email}`)
    .pipe()
  }
}
