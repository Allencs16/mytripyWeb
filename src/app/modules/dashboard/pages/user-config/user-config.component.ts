import { UserConfigService } from './services/user-config.service';
import { UserService } from 'src/app/modules/public/pages/login/services/user.service';
import { Component } from '@angular/core';
import { User } from 'src/app/core/models/user.model';
import { Loading } from 'src/app/core/interfaces/loading.model';

@Component({
  selector: 'app-user-config',
  templateUrl: './user-config.component.html',
  styleUrls: ['./user-config.component.scss']
})
export class UserConfigComponent {

  usuariosTabela: User[] = [];

  displayedColumns: string[] = ['nome', 'email', 'ativo', 'tipoUsuario']

  constructor(
    private userService: UserService,
    private userConfigService: UserConfigService
  ){
    this.listarUsuario();
  }

  listarUsuario(){
    this.userService.getUsers().subscribe(users => {
      this.usuariosTabela = users;
    })
  }

  enableUser(user: User){
    console.log(user);
    this.usuariosTabela.forEach(userTabela => {
      if(userTabela.id == user.id){
        if(userTabela.isActive == false){
          userTabela.isActive = true;
        }else{
          userTabela.isActive = false;
        }
      }
    })
  }

}
