import { Semanas } from './../models/semanas.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Loading } from 'src/app/core/interfaces/loading.model';
import { configMap } from 'src/app/core/utils/config-map';
import { GenericService } from 'src/app/services/generic.service';

@Injectable({
  providedIn: 'root'
})
export class SemanasService extends GenericService<Semanas> {

  constructor(httpClient: HttpClient) { 
    super(httpClient, 'week');
  }

  getWeeks(loading?: Loading): Observable<Semanas>{
    return this.getHttpClient().get<Semanas>(`${this.api}`)
    .pipe(configMap());
  }

}
