import { NgModule } from '@angular/core';
import { canActivate, redirectLoggedInTo, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('src/app/components/auth/auth.module')
      .then(m => m.AuthModule),
    ...canActivate(() => redirectLoggedInTo(['/dashboard']))
  },
  {
    path: '',
    loadChildren: () => import('src/app/components/layout/layout.module')
      .then(m => m.LayoutModule),
    ...canActivate(() => redirectUnauthorizedTo(['/auth']))
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
