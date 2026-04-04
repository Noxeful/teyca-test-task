import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  public getClientsTable(
    token: string | null,
    search: string | number,
    limit: string | number,
    offset: string | number,
  ): Observable<any> {
    const url: string = `https://api.teyca.ru/v1/${token}/passes`;

    let params: HttpParams = new HttpParams()
      .set('search', search)
      .set('limit', limit)
      .set('offset', offset);

    return this.http.get(url, { params });
  }
}
