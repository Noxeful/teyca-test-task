import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { LocalStorageService } from '@shared/services/local-storage-service/local-storage.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private ignoreEndpoints: string[];

  constructor(private localStorageService: LocalStorageService) {
    this.ignoreEndpoints = ['auth/login', 'auth/registration'];
  }

  public intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {

    if (!request.url.includes('api.teyca')) {
      return next.handle(request);
    }

    const ignoreAuthCheck: boolean = this.ignoreEndpoints.some((endpoint) =>
      request.url.includes(endpoint)
    );
    if (ignoreAuthCheck) {
      return next.handle(request);
    }

    const token = this.localStorageService.getItem('auth_token');

    if (!token) {
      return next.handle(request);

    }

    const authReq = request.clone(
      {
        headers: request.headers.append('Authorization', `${token}`),
      }
    );


    return next.handle(authReq).pipe(catchError(this.handleError));
  }

  public handleError(res: any): Observable<never> {
    const error =
      typeof res && typeof res?.error === 'string'
        ? res?.error
        : res?.error?.error;
    const status = res.status;
    return throwError({ error, status });
  }
}
