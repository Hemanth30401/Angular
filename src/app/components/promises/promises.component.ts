import { Component } from '@angular/core';
import { CoursesServiceService } from 'src/app/services/courses-service.service';
import { HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';
import { Observable, debounceTime } from 'rxjs';
import { PromisesService } from 'src/app/services/promises.service';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styleUrls: ['./promises.component.css']
})
export class PromisesComponent 
{
  resData:any=[];
  resultData:any=[];
  public country = new FormControl;
  constructor(private _promsieService:PromisesService)
  {}

  ngOnInit(){
    this.country.valueChanges.pipe(debounceTime(5000)).subscribe(country => {
      console.log(country);
      this.getCountry(country);
    })
  }
  getCountry(value)
  {
      setTimeout(()=>{
        this._promsieService.getCount2(value).then(
          (res)=>{
            console.log(res);
            this.resData=res;
          })
  })
}


search(name:any){
  this._promsieService.getPromiseAPI1(name).subscribe(
    (result) =>
    {
      console.log(result);
      this.resultData=result;
    }

  )
}

  
}