import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(private http: HttpClient) {

  }

  public login(login: string, password: string): Observable<any> {
    const url: string = 'https://api.teyca.ru/test-auth-only';

    return this.http.post(url, { login, password});
  }
}
