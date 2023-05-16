import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppSideLoginComponent } from 'src/app/modules/public/pages/login/login.component';
import { AppSideRegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: AppSideLoginComponent},
  { path: 'register', component: AppSideRegisterComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
