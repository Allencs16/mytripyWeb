import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { TablerIconsModule } from 'angular-tabler-icons';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import * as TablerIcons from 'angular-tabler-icons/icons';
import { AppDashboardComponent } from './pages/dashboardv1/dashboard.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { SemanasComponent } from './pages/semanas/semanas.component';
import { MaterialModule } from 'src/app/material.module';
import { MatTableModule } from '@angular/material/table';
import { TripComponent } from './pages/trip/trip.component';


@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    TablerIconsModule.pick(TablerIcons),
    NgApexchartsModule,
    MaterialModule,
    FormsModule,
    MatTableModule
  ],
  declarations: [
    DashboardComponent,
    AppDashboardComponent,
    SemanasComponent,
    TripComponent
  ],
  exports: [
    TablerIconsModule
  ]
})
export class DashboardModule { }
