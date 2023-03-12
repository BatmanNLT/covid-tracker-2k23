import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/auth/sign-in', pathMatch: 'full' },
  {
    path: 'auth',
    loadChildren: () => import('./core/core.module').then(m => m.CoreModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
