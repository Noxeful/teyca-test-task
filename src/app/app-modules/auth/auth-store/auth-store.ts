import { AuthDTO, AuthStateModel } from '@auth/auth-core/models/auth-state-models';
import { AuthService } from '@auth/auth-core/services/auth-service/auth.service';
import { signalStore, withState, withMethods, patchState } from '@ngrx/signals';
import { inject } from '@angular/core';
import { catchError, from, Observable, of, pipe, switchMap, tap } from 'rxjs';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { Router } from '@angular/router';
import { LocalStorageService } from '@shared/services/local-storage-service/local-storage.service';

const initialState: AuthStateModel = {
  token: null,
  error: null,
  loading: false,
  userName: null,
};


export const AuthStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withMethods((store, authService = inject(AuthService), router: Router = inject(Router), localStorageService: LocalStorageService = inject(LocalStorageService)) => ({
    login: rxMethod<AuthDTO>(
      pipe(
        tap(() => patchState(store, { loading: true, error: null })),
        switchMap(
          ({ login, password }: AuthDTO): Observable<any> =>
            from(authService.login(login, password)).pipe(
              tap({
                next: (data: { auth_token: string }) => {
                  patchState(store, { token: data.auth_token, loading: false, userName: login });
                  localStorageService.setItem('auth_token', data.auth_token);
                  // router.navigate(['']).finally();
                },
                error: (error) => {
                  console.error(error);
                  patchState(store, {
                    token: null,
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
  })),
);
