import { SemanasService } from './services/semanas.service';
import { Semanas } from './models/semanas.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-semanas',
  templateUrl: './semanas.component.html',
  styleUrls: ['./semanas.component.scss']
})
export class SemanasComponent {

  dadosTabela: Semanas[] = [];

  displayedColumns: string[] = ['Valor gasto total', 'KM total', 'Budget', 'Gastos', 'Data Inicio', 'Data Fim', 'Usuário'];

  constructor(
    private semanasService: SemanasService
  ){
    this.semanasService.getWeeks().subscribe(response => {
      this.dadosTabela.push(response);
    })
  }

}
