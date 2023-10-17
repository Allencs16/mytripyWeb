import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GenericService } from 'src/app/services/generic.service';
import { Budget } from '../models/budget.model';
import { configMap } from 'src/app/core/utils/config-map';

@Injectable({
  providedIn: 'root'
})
export class BudgetService extends GenericService<Budget>{

  constructor(
    httpClient: HttpClient
  ) { 
    super(httpClient, 'budget')
  }

  getBudgets(){
    return this.getHttpClient().get(`${this.api}`)
    .pipe(configMap());
  }
}
