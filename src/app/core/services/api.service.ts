import { Injectable } from "@angular/core";
import { HttpHeaders, HttpClient, HttpParams } from "@angular/common/http";

import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
@Injectable()
export class ApiService {
  /**
   * Creates an instance of ApiService.
   * @param {HttpClient} http
   * @memberof ApiService
   */
  constructor(private http: HttpClient) { }
  /**
   * Format errors schema
   *
   * @private
   * @param {*} error
   * @returns
   * @memberof ApiService
   */
  private formatErrors(error: any) {
    return throwError(error.error);
  }
  /**
   * Api Get Schema
   *
   * @param {string} path
   * @param {HttpParams} [params=new HttpParams()]
   * @returns {Observable<any>}
   * @memberof ApiService
   */
  get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
    return this.http.get(`${path}`, { params }).pipe(
      catchError(this.formatErrors)
    )
  }
  /**
   * Api Put Schema
   *
   * @param {string} path
   * @param {Object} [body={}]
   * @returns {Observable<any>}
   * @memberof ApiService
   */
  put(path: string, body: Object = {}): Observable<any> {
    return this.http.put(path, JSON.stringify(body)).pipe(
      catchError(this.formatErrors)
    )
  }
  /**
   * Api Post Schema
   *
   * @param {string} path
   * @param {Object} [body={}]
   * @returns {Observable<any>}
   * @memberof ApiService
   */
  post(path: string, body: Object = {}): Observable<any> {
    return this.http.post(path, JSON.stringify(body)).pipe(
      catchError(this.formatErrors)
    )
  }
  /**
   * Api Delete Schema
   *
   * @param {string} path
   * @returns {Observable<any>}
   * @memberof ApiService
   */
  delete(path: string): Observable<any> {
    return this.http.delete(path).pipe(
      catchError(this.formatErrors)
    )
  }

}