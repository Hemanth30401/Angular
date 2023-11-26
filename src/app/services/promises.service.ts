import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PromisesService {

  private _promiseAPI = 'https://restcountries.com/v3.1/name/';
  constructor(private _http:HttpClient) { }

  getCount2(name:string): Promise<any> {
    // return this._http.get<any>(this._promiseAPI+name).toPromise();
    return firstValueFrom(this._http.get<any>(this._promiseAPI+name));
  }

  getPromiseAPI1(name: string): Observable<[]> {
    return this._http.get<[]>(this._promiseAPI + name);
  }
}
