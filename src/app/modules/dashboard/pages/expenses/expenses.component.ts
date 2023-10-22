import { TratarErrorService } from './../../../../core/services/tratar-error.service';
import { SemanasService } from './../semanas/services/semanas.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Expense } from './models/expense.model';
import { ExpensesService } from './services/expenses.service';
import { Component, OnInit } from '@angular/core';
import { BudgetsTypeList } from 'src/app/core/enums/type.enum';
import { Semanas } from '../semanas/models/semanas.model';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css']
})
export class ExpensesComponent implements OnInit {

  expensesList: Expense[] = [];
  semanasList: Semanas[] = [];
  form: FormGroup;
  typesExpenses = new BudgetsTypeList().typesList;

  constructor(
    private expenseService: ExpensesService,
    private formBuilder: FormBuilder,
    private semanasService: SemanasService,
    private tratarErrorService: TratarErrorService
  ) { }

  ngOnInit() {
    this.getExpenses();
    this.getData();
    this.buildForm();
  }

  getExpenses(){
    this.expenseService.getAllExpenses().subscribe(expenses => {
      expenses.forEach((element: Expense) => {
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
      this.expensesList = expenses.reverse();
    })
  }

  buildForm(){
    this.form = this.formBuilder.group({
      type: [null, [Validators.required]],
      value: [null, [Validators.required]],
      weekId: [null, [Validators.required]],
      expenseDate: [null, [Validators.required]]
    });
  }

  getData(){
    this.semanasService.getWeeks()
    .subscribe(weeks => {
      this.semanasList = this.semanasList.concat(weeks);
    })
  }

  createExpenses(){
    this.expenseService.createExpense(this.form.value)
    .subscribe(expense => {
      this.tratarErrorService.avisoMensagemSalvo('Gasto Criado Com sucesso.');
      this.form.reset();
      this.getExpenses();
    })
  }

}
