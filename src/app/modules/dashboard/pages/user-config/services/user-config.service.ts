import { User } from './../../../../../core/models/user.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { configMap } from 'src/app/core/utils/config-map';
import { GenericService } from 'src/app/services/generic.service';

@Injectable({
  providedIn: 'root'
})
export class UserConfigService extends GenericService<User>{

  constructor(httpClient: HttpClient) {
    super(httpClient, 'user')
  }

  editUser(user: User){
    return this.getHttpClient().put(`${this.api}/editar`, user)
    .pipe(configMap());
  }
}
