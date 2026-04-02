import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ClientsContainer, UsersContainer } from '@users/users-core/containers';
import { UsersSettingsContainer } from '@users/users-core/containers/users-settings-container/users-settings-container';
import { AuthGuard } from '@auth/auth-core/guards/auth-guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: UsersContainer,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      {
        path: '',
        redirectTo: 'clients',
        pathMatch: 'full',
      },
      {
        path: 'settings',
        component: UsersSettingsContainer,
      },
      {
        path: 'clients',
        component: ClientsContainer,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class UsersRoutingModule {}
