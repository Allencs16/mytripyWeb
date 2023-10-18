import { TratarErrorService } from './../../../../core/services/tratar-error.service';
import { SemanasService } from './../semanas/services/semanas.service';
import { BudgetService } from './services/budget.service';
import { Component, OnInit } from '@angular/core';
import { Budget } from './models/budget.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Semanas } from '../semanas/models/semanas.model';
import { BudgetsTypeList } from 'src/app/core/enums/type.enum';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css']
})
export class BudgetComponent implements OnInit {

  budgetsForPath: Budget[] = [];
  semanaForSelect: Semanas[] = [];
  form: FormGroup;
  typesBudget = new BudgetsTypeList().typesList;


  constructor(
    private budgetService: BudgetService,
    private formBuilder: FormBuilder,
    private semanaService :SemanasService,
    private tratarErrorService: TratarErrorService
  ) { 
    this.getBudgets();
    this.getData();
    this.buildForm();
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
      this.budgetsForPath = budgets.reverse();
    });
  }

  buildForm(){
    this.form = this.formBuilder.group({
      type: [null],
      value: [null],
      weekId: [null]
    });
  }

  getData(){
    this.semanaService.getWeeks().subscribe(semanas => {
      this.semanaForSelect = this.semanaForSelect.concat(semanas);
    })
  }

  createBudget(){
    this.budgetService.createBudget(this.form.value)
    .subscribe(budget => {
      this.form.reset();
      this.tratarErrorService.avisoMensagemSalvo('Salvo com sucesso.');
      this.getBudgets();
    });
  }

}
