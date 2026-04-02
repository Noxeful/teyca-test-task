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
    loadChildren: () =>
      import('./app-modules/auth/auth-core/auth.module').then(({ AuthModule }) => AuthModule),
  },
  {
    path: 'users',
    loadChildren: () =>
      import('./app-modules/users/users-core/users.module').then(({ UsersModule }) => UsersModule),
  },
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
