import { UserService } from './services/user.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from './services/authentication.service';
import { Component } from '@angular/core';
import { Loading } from 'src/app/core/interfaces/loading.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class AppSideLoginComponent {

  form: FormGroup
  
  constructor(
    private authenticationService: AuthenticationService,
    private fb: FormBuilder,
    private router: Router,
    private userService: UserService
  ) {
    this.form = fb.group({
      username: [null],
      password: [null]
    })
  }

  login(){
    this.authenticationService.authenticate(this.form.value).subscribe((response) => {
      sessionStorage.setItem("token", response.token);
      this.router.navigate(["/dashboard"]);
      this.userService.getUserByEmail(this.form.get('username')?.value).subscribe((response) => {
        console.log(response);
      });
    });
  }

}
