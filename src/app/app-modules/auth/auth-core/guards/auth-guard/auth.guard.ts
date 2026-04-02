import { inject, Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { AuthStore } from '@auth/auth-store/auth-store';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate, CanActivateChild {
  readonly authStore = inject(AuthStore);
  readonly router = inject(Router);

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {
    const token = this.authStore.token();
    if (token) {
      return true;
    }

    return this.router.parseUrl('/auth');
  }

  public canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): boolean | UrlTree {

    return this.canActivate(childRoute, state);
  }
}
