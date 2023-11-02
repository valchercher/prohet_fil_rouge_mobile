import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccueilPage } from './accueil.page';

const routes: Routes = [
  {
    path: '',
    component: AccueilPage
  },
  {
    path: 'sessions',
    loadChildren: () => import('./sessions/sessions.module').then( m => m.SessionsPageModule)
  },
  {
    path: 'cours',
    loadChildren: () => import('./cours/cours.module').then( m => m.CoursPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccueilPageRoutingModule {}
