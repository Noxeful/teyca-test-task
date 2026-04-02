import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { UserContainerLink } from '@users/users-core/models/users-general-models';
import { AuthStore } from '@auth/auth-store/auth-store';

@Component({
  selector: 'users-container',
  standalone: false,
  templateUrl: './users-container.html',
  styleUrl: './users-container.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersContainer {
  public links: UserContainerLink[];
  readonly authStore = inject(AuthStore);

  constructor() {
    this.links = [
      {
        path: '/users/settings',
        label: 'Общие настройки',
      },
      {
        path: '/users/clients',
        label: 'Таблица клиентов',
      },
    ];
  }
}
