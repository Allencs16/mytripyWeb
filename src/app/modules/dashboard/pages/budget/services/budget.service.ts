import { Budget } from './../models/budget.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GenericService } from 'src/app/services/generic.service';
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

  createBudget(budget: Budget){
    return this.getHttpClient().post(`${this.api}`, budget)
    .pipe(configMap());
  }
}
