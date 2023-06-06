import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MonoTypeOperatorFunction, Observable, UnaryFunction, finalize, pipe } from 'rxjs';
import { environment } from 'src/environments/environments';
import { Loading } from '../core/interfaces/loading.model';
import { configMap } from '../core/utils/config-map';

@Injectable({
  providedIn: 'root'
})
export abstract class GenericService<T> {
  private _api = environment.api_url;

  constructor(
    private HttpClient: HttpClient,
    private controller: string
  ) { 
    this.api = this.controller;
  }

  get(loading?: Loading): Observable<T[]>{
    return this.getHttpClient().get<T[]>(`${this._api}`)
    .pipe(this.configMapAndLoading());
  }

  // getWithParams(filter: T,): Observable<T[]> {
  //   const params = new AddHttpParams(filter).createParams();

  //   return this.getHttpClient()
  //     .get<T[]>(`${this._api}`, { params })
  //     .pipe();
  // }

  getById(id: number): Observable<T> {
    return this.getHttpClient()
      .get<T>(`${this._api}/${id}`)
      .pipe();
  }

  save(entity: T, loading: Loading): Observable<T> {
    return this.getHttpClient()
      .post(`${this._api}`, entity)
      .pipe(this.configMapAndLoading());
  }

  update(id: number, entity: T, loading: Loading): Observable<T> {
    this.startLoading(loading);
    return this.getHttpClient().put(`${this._api}/${id}`, entity).pipe(this.configMapAndLoading());
  }

  delete(id: number, loading: Loading): Observable<void> {
    return this.getHttpClient()
      .delete(`${this._api}/${id}`)
      .pipe(this.configMapAndLoading());
  }

  protected startLoading(loading: Loading): void {
    loading = this.handlerLoading(loading);
    if (loading.startLoading) loading.load = true;
  }

  protected stopLoading(loading: Loading): MonoTypeOperatorFunction<any> {
    loading = this.handlerLoading(loading);
    return loading.stopLoading ? finalize(() => loading.load = false) : pipe();
  }

  protected configMapAndLoading(): UnaryFunction<Observable<any>, Observable<any>> {
    return pipe(
      configMap(),
    )
  }

  protected set api(controller: string) {
    this._api = `${this._api}/${controller}`;
  }

  protected get api(): string {
    return this._api;
  }

  protected getHttpClient(): HttpClient {
    return this.HttpClient;
  }

  protected getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Set-Cookie': 'HttpOnly;Secure;SameSite=Strict',
    });
  }

  protected getHeadersMulti(): HttpHeaders {
    return new HttpHeaders({
      'Accept': '*/*',
    });
  }

  protected getHeadersPularError(): HttpHeaders {
    return new HttpHeaders().append('skip-error', 'true');
  }

  protected getHeadersPDF(): HttpHeaders {
    return new HttpHeaders().set('Accept', 'application/pdf');
  }

  protected getHeadersExcel(): HttpHeaders {
    return new HttpHeaders().set('Accept', 'application/octet-stream');
  }

  private handlerLoading(loading: Loading): Loading {
    if (loading == null || loading === undefined) loading = { startLoading: false, stopLoading: false };
    if (loading.startLoading === undefined) loading.startLoading = false;
    if (loading.stopLoading === undefined) loading.stopLoading = false;
    return loading;
  }
}
