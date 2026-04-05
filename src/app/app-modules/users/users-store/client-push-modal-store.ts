import { signalStore, withMethods } from '@ngrx/signals';
import { inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { pipe, tap } from 'rxjs';
import { ClientPushModalComponent } from '@users/users-core/components';
import { UserTableModel } from '@users/users-core/models/users-state-model';
import { AuthStore } from '@auth/auth-store/auth-store';

export const ClientPushModalStore = signalStore(
  { providedIn: 'root' },
  withMethods(() => {
    const dialog = inject(MatDialog);
    const userName = inject(AuthStore).userName();

    return {
      openClientPushModal: rxMethod<UserTableModel[]>(
        pipe(
          tap((users: UserTableModel[]) => {
            dialog.open(ClientPushModalComponent, {
              width: '655px',
              height: '800px',
              data: { users, userName },
              autoFocus: false,
            });
          }),
        ),
      ),
    };
  }),
);
