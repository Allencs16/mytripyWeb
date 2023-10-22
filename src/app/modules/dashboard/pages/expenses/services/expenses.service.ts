import { Expense } from './../models/expense.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GenericService } from 'src/app/services/generic.service';
import { configMap } from 'src/app/core/utils/config-map';

@Injectable({
  providedIn: 'root'
})
export class ExpensesService extends GenericService<Expense> {

  constructor(httpClient: HttpClient) { 
    super(httpClient, 'expenses')
  }

  getAllExpenses(){
    return this.getHttpClient().get(`${this.api}`)
    .pipe(configMap());
  }

  createExpense(expense: Expense){
    return this.getHttpClient().post(`${this.api}`, expense)
    .pipe(configMap());
  }
}
