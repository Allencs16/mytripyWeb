import { BudgetService } from './services/budget.service';
import { Component, OnInit } from '@angular/core';
import { Budget } from './models/budget.model';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css']
})
export class BudgetComponent implements OnInit {

  budgetsForPath: Budget[] = [];

  constructor(
    private budgetService: BudgetService
  ) { 
    this.getBudgets();
  }

  ngOnInit() {
  }

  getBudgets(){
    this.budgetService.getBudgets()
    .subscribe(budgets => {
      budgets.forEach((element: Budget) => {
        switch (element.type) {
          case 'FOOD':
            element.type = 'Comida'
            break;
          case 'FUEL':
            element.type = 'Gasolina'
            break;
          case 'STAY':
            element.type = 'Hospedagem'
            break;
          case 'OTHER':
            element.type = 'Outro'
            break;
          default:
            break;
        }
      });
      this.budgetsForPath = budgets;
    });
  }

}
