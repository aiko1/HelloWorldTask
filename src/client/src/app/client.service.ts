import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Content } from './content';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ClientService {
  private url: string = 'http://localhost:8080/api/content/1';
  constructor(private _http: HttpClient) { }

  getContent(): Observable<Content> {
    return this._http.get<Content>(this.url).pipe(
      catchError(this.handleError<Content>(`getContent id=1`))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
