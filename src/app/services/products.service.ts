import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../user';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private _prodUrl="https://dummyjson.com/products/add";
  constructor(private _http:HttpClient) { }

  postData(hem:any){
    return this._http.post<any>(this._prodUrl,hem);
  }
}
