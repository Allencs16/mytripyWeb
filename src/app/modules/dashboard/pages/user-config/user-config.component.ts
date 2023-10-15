import { UserConfigService } from './services/user-config.service';
import { UserService } from 'src/app/modules/public/pages/login/services/user.service';
import { Component } from '@angular/core';
import { User } from 'src/app/core/models/user.model';
import { Loading } from 'src/app/core/interfaces/loading.model';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-config',
  templateUrl: './user-config.component.html',
  styleUrls: ['./user-config.component.scss']
})
export class UserConfigComponent {

  usuariosTabela: User[] = [];

  displayedColumns: string[] = ['nome', 'email', 'ativo', 'tipoUsuario']

  typeUser: String[] = [
    'VIAJANTE',
    'ORGANIZADOR'
  ];
  form: FormGroup;

  constructor(
    private userService: UserService,
    private userConfigService: UserConfigService,
    private fb: FormBuilder
  ){
    this.listarUsuario();

    this.form = this.fb.group({
      name: [null],
      userType: [null]
    })
  }

  listarUsuario(){
    this.userService.getUsers().subscribe(users => {
      console.log(users);
      this.usuariosTabela = users;
      this.form.patchValue({
        userType: users.userType
      })
    })
  }

  enableUser(user: User){
    this.usuariosTabela.forEach(userTabela => {
      if(userTabela.id == user.id){
        if(userTabela.active == false){
          userTabela.active = true;
          user.active = true;
          this.userConfigService.editUser(user).subscribe(user => {
            console.log(user);
          });
        }else{
          userTabela.active = false;
          user.active = false;
          this.userConfigService.editUser(user).subscribe(user => {
            console.log(user);
          });
        }
      }
    })
  }

  changeType(user:User){
    this.usuariosTabela.forEach(userTabela => {      
      if(userTabela.id == user.id){
        if(userTabela.userType == 'VIAJANTE'){
          userTabela.userType = 'ORGANIZADOR';
          user.userType = 'ORGANIZADOR';
          this.userConfigService.editUser(user).subscribe(user => {
            console.log(user);
          });
        }else{
          userTabela.userType = 'VIAJANTE';
          user.userType = 'VIAJANTE';
          this.userConfigService.editUser(user).subscribe(user => {
            console.log(user);
          });
        }
      }
    })
  }

}
