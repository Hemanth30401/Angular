import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CountriesService } from 'src/app/services/countries.service';

@Component({
  selector: 'app-capitals',
  templateUrl: './capitals.component.html',
  styleUrls: ['./capitals.component.css']
})
export class CapitalsComponent 
{
  capitals:any=[];
  constructor(private _countries:CountriesService)
  {
    this.capitals=this._countries.getCountry();
  }

  ngOnInit()
  {
    this.getCountriesList();
  }

  getCountriesList()
  {
    this._countries.getCountry().subscribe(
      (result)=>
      {
        this.capitals=result;
        console.log(result);
      })
  }
}
