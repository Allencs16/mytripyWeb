import { Routes } from '@angular/router';
import { AppDashboardComponent } from '../modules/dashboard/pages/dashboardv1/dashboard.component';

export const PagesRoutes: Routes = [
  {
    path: '',
    component: AppDashboardComponent,
    data: {
      title: 'Starter Page',
    },
  },
];
