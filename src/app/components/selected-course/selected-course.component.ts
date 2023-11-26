import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Route, Router } from '@angular/router';

@Component({
  selector: 'app-selected-course',
  templateUrl: './selected-course.component.html',
  styleUrls: ['./selected-course.component.css']
})


export class SelectedCourseComponent {
  public courseId:number;
  public courseName:string=null;
  constructor(private _ar:ActivatedRoute,
              private _router:Router){
  }

  ngOnInit(){
    // this.courseId = parseInt(this._ar.snapshot.paramMap.get('id'));
    this._ar.paramMap.subscribe((params:ParamMap)=>{
      this.courseId=parseInt(params.get('id'));
      this.courseName=params.get('name');
    })
  }
  onBack(){
    this._router.navigate(['/course-details',{id:this.courseId,name:this.courseName}]);
  }
}