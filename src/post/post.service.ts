import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, observable, Observable, throwError } from 'rxjs';
import { Post } from './post';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private apiURL = 'https://jsonplaceholder.typicode.com';

  /*------------------------------------------
  --------------------------------------------
  Http Header Options
  --------------------------------------------
  --------------------------------------------*/

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'Application/json',
    }),
  };

  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/

  constructor(private http: HttpClient) {}

  /**
   * Write code on Method
   *
   * @return response()
   */
  getAll(): Observable<any> {
    return this.http
      .get(this.apiURL + '/posts/')
      .pipe(catchError(this.errorHandler));
  }

  /**
   * Write code on Method
   *
   * @return response()
   */
  create(post: Post): Observable<any> {
    return this.http
      .post(this.apiURL + '/posts/', JSON.stringify(post), this.httpOptions)

      .pipe(catchError(this.errorHandler));
  }

  /**
   * Write code on Method
   *
   * @return response()
   */
  find(id: number): Observable<any> {
    return this.http
      .get(this.apiURL + '/posts/' + id)

      .pipe(catchError(this.errorHandler));
  }

  /**
   * Write code on Method
   *
   * @return response()
   */
  update(id: number, post: Post): Observable<any> {
    return this.http
      .put(this.apiURL + '/posts/' + id, JSON.stringify(post), this.httpOptions)

      .pipe(catchError(this.errorHandler));
  }

  /**
   * Write code on Method
   *
   * @return response()
   */
  delete(id: number): Observable<any> {
    return this.http
      .delete(this.apiURL + '/posts/' + id, this.httpOptions)

      .pipe(catchError(this.errorHandler));
  }

  /**
   * Write code on Method
   *
   * @return response()
   */
  errorHandler(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = 'Error Code: ${error.status}\nMessage: ${error.message}';
    }
    return throwError(errorMessage);
  }
}
