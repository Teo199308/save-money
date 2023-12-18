import { NgModule } from '@angular/core';
import { canActivate, redirectLoggedInTo, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('src/app/components/dashboard/dashboard.module')
      .then(m => m.DashboardModule),
    ...canActivate(() => redirectUnauthorizedTo(['/auth']))
  },
  {
    path: 'auth',
    loadChildren: () => import('src/app/components/auth/auth.module')
      .then(m => m.AuthModule),
    ...canActivate(() => redirectLoggedInTo(['/dashboard']))
  }, {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
