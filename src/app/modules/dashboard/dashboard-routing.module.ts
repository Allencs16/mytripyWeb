import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SemanasComponent } from './pages/semanas/semanas.component';
import { TripComponent } from './pages/trip/trip.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'semanas', component: SemanasComponent },
  { path: 'viagens', component: TripComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
