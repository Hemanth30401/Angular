import { Component } from '@angular/core';
import { CoursesServiceService } from 'src/app/services/courses-service.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-sibiling',
  templateUrl: './sibiling.component.html',
  styleUrls: ['./sibiling.component.css']
})
export class SibilingComponent {
  
  message:string;
  constructor(public _data:DataService)
  {}

  // btnClick(){
  //   this._testService.myData = 'Sibiling data to parent added';
  // }
  ngOnInit(){
    this._data.currentmsg.subscribe(msg => this.message=msg);
  }

  newMessage(){
    this._data.changemsg('Hey from sibling');
  }

}
