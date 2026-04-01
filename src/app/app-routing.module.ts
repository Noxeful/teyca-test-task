import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    loadChildren: () => import('./app-modules/auth/auth-routing.module').then(({ AuthRoutingModule }) => AuthRoutingModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {
      scrollPositionRestoration: 'disabled'
    }),
  ],
  exports: [RouterModule],
})

export class AppRoutingModule {}
