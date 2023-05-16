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
import { SemanasComponent } from './pages/semanas/semanas.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ChartMonthExpensesComponent } from './pages/dashboard/components/chart-month-expenses/chart-month-expenses.component';


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
    NgApexchartsModule
  ],
  declarations: [
    DashboardComponent,
    AppDashboardComponent,
    SemanasComponent,
    ChartMonthExpensesComponent
  ],
})
export class DashboardModule { }
