import { TratarErrorService } from './../../../../core/services/tratar-error.service';
import { SigninService } from './services/signin.service';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class AppSideRegisterComponent {
  constructor(
    private router: Router,
    private signInService: SigninService,
    private tratarErrorService: TratarErrorService
  ) {}

  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(6)]),
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    username: new FormControl('')
  });

  get f() {
    return this.form.controls;
  }

  async cadastrar() {
    await this.form.patchValue({
      username: this.form.get('email')?.value
    });
    this.signInService.createNewUser(this.form.value).subscribe((response) => {
      this.tratarErrorService.avisoMensagemSalvo('Seu usuário foi criado com sucesso');
      this.router.navigate(['/login']);
    });
  }
}
