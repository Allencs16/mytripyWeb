import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/core/models/user.model';
import { GenericService } from 'src/app/services/generic.service';

@Injectable({
  providedIn: 'root'
})
export class UserConfigService extends GenericService<User>{

  constructor(httpClient: HttpClient) {
    super(httpClient, '/user')
  }
}
