import { TratarErrorService } from './../../../../core/services/tratar-error.service';
import { UserService } from 'src/app/modules/public/pages/login/services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SemanasService } from './services/semanas.service';
import { Semanas } from './models/semanas.model';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { User } from 'src/app/core/models/user.model';

@Component({
  selector: 'app-semanas',
  templateUrl: './semanas.component.html',
  styleUrls: ['./semanas.component.scss']
})
export class SemanasComponent {

  dadosTabela: Semanas[] = [];

  displayedColumns: string[] = ['ValorGastoTotal', 'totalKm', 'budget', 'expenses', 'startDate', 'endDate', 'user', 'current'];

  usersTravelers: User[] = [];

  mostrarSemanas = true;
  form: FormGroup;

  ngOnInit(): void {
    this.getUserTravellers();
  }

  constructor(
    private semanasService: SemanasService,
    private formBuilder: FormBuilder,
    private userService: UserService,
    private tratarErrorService: TratarErrorService
  ){
    this.semanasService.getWeeks().subscribe(response => {
      this.dadosTabela = this.dadosTabela.concat(response);
    });
    this.buildForm();
  }

  buildForm(){
    this.form = this.formBuilder.group({
      startDate: [null, [Validators.required]],
      endDate: [null, [Validators.required]],
      userId: [null, [Validators.required]]
    })
  }

  mostrarCriarSemana(){
    if (this.mostrarSemanas) {
      this.mostrarSemanas = false;
    } else {
      this.mostrarSemanas = true;
    }
  }

  newWeek(){
    this.semanasService.createNewWeek(this.form.value)
    .subscribe(week => {
      this.tratarErrorService.avisoMensagemSalvo('Nova semana Criada com Sucesso.');
    })
  }

  getUserTravellers(){
    this.userService.getByUserTypeAndActive('VIAJANTE')
    .subscribe(users => {
      this.usersTravelers = users;
    })
  }
}
