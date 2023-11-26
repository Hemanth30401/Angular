import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, firstValueFrom } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class CoursesServiceService {
  private _dummydeleteUrl: any = 'https://dummyjson.com/products/';
  private _dummyServerURL: string =
    'https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001';


  public myData:string;

  private _codeCountry= 'https://restcountries.com/';

  constructor(private _http: HttpClient) {}

  getCode1() : Observable<[]> {
    return this._http.get<[]>(this._codeCountry);
  }

  deleteProd1(Id: number): Observable<any> {
    return this._http.delete<any>(this._dummydeleteUrl + `${Id}`);
  }
  getEmpolyeeList(): Observable<[]> {
    return this._http.get<[]>(this._dummyServerURL);
  }

    courses: any = [
    {
      id:1,
      name:'Java',
      fee:12000
    },
    {
      id:2,
      name:'Sql',
      fee:2000
    },
    {
      id:3,
      name:'Angular',
      fee:7000
    },
    {
      id:4,
      name:'Spring',
      fee:6000
    }
  ]

  getCourses(){
    return this.courses;
  }

}
