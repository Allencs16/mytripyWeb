import { SemanasService } from './services/semanas.service';
import { Semanas } from './models/semanas.model';
import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-semanas',
  templateUrl: './semanas.component.html',
  styleUrls: ['./semanas.component.scss']
})
export class SemanasComponent {

  dadosTabela: Semanas[] = [];

  displayedColumns: string[] = ['ValorGastoTotal', 'totalKm', 'budget', 'expenses', 'startDate', 'endDate', 'user', 'current'];

  mostrarSemanas = true;

  constructor(
    private semanasService: SemanasService
  ){
    this.semanasService.getWeeks().subscribe(response => {
      this.dadosTabela = this.dadosTabela.concat(response);
    });
  }

  mostrarCriarSemana(){
    if (this.mostrarSemanas) {
      this.mostrarSemanas = false;
    } else {
      this.mostrarSemanas = true;
    }
  }
}
