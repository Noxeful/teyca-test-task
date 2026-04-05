import { UsersStateModel, UsersRequestModel, UserTableModel } from '@users/users-core/models/users-state-model';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { inject } from '@angular/core';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { catchError, from, Observable, of, pipe, switchMap, tap } from 'rxjs';
import { AuthStore } from '@auth/auth-store/auth-store';
import { UsersService } from '@users/users-core/services/users-service/users.service';

const initialState: UsersStateModel = {
  users: [],
  error: null,
  loading: false,
  tableMeta: null,
}

export const UsersStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withMethods(
    (store, authStore = inject(AuthStore), usersService: UsersService = inject(UsersService)) => ({
      getUsers: rxMethod<UsersRequestModel>(
        pipe(
          tap(() => patchState(store, { loading: true, error: null })),
          switchMap(
            ({ search, limit, offset }: UsersRequestModel): Observable<any> =>
              from(
                usersService.getClientsTable(
                  authStore.token(),
                  search ? search : '',
                  limit,
                  offset,
                ),
              ).pipe(
                tap({
                  next: (data: any) => {
                    patchState(store, { users: data.passes, tableMeta: data.meta, loading: false });
                  },
                  error: (error) => {
                    console.error(error);
                    patchState(store, {
                      users: [],
                      tableMeta: null,
                      error: error.message,
                      loading: false,
                    });
                  },
                }),
              ),
          ),
          catchError(() => {
            return of(null);
          }),
        ),
      ),
      sendPush: rxMethod<{ clients: UserTableModel[]; date_start: string | null; text: string }>(
        pipe(
          switchMap(
            ({ clients, date_start, text }: any): Observable<any> =>
              from(
                usersService.sendPush(authStore.token(), clients, date_start, text),
              ).pipe(
                tap({
                  next: (data: any) => {


                  },
                  error: (error) => {
                    console.error(error);
                  },
                }),
              ),
          ),
          catchError(() => {
            return of(null);
          }),
        ),
      ),
    }),
  ),
);
