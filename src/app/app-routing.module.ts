import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { BlankComponent } from './layouts/blank/blank.component';
import { FullComponent } from './layouts/full/full.component';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/public/public.module').then(m => m.PublicModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./modules/modules.module').then(m => m.ModulesModule),
  },
  { path: '**', redirectTo: '404' },
];

const config: ExtraOptions = {
  useHash: true,
};

@NgModule({
  imports: [
    RouterModule.forRoot(routes, config),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
