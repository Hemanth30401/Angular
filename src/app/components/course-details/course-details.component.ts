import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { CoursesServiceService } from 'src/app/services/courses-service.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent {
  details:any=[];
  courses:any=[];
  coursesName:any;
  coursesId:any;
  c:any=[];
  // c1:any=[];
  constructor(private _courseservice:CoursesServiceService,
              private _router:Router,
              private _retrive:ActivatedRoute)
  {
    // this.courses=this._courseservice.getCourses();
  }

  ngOnInit(){
    this._courseservice.getCode1().subscribe((res)=>{
      console.log(res);
    })
  }

  // onSelectedCourse(course){
  //   console.log(course);
  //   this._router.navigate(['/selected-course', course.id,course.name])
  // }

  // selected(course){
  //   // this.coursesId = this._retrive.snapshot.paramMap.get('id');
  //   this._retrive.paramMap.subscribe((hm1: ParamMap)=>
  //   {
  //     this.coursesId=hm1.get('id');
  //     this.coursesName=hm1.get('name');
  //   })
  //   return (course.name==this.coursesName) && (course.id==this.coursesId);
  // }
  // toHome(){
  //   this._router.navigate(['/home']);
  // }

}
