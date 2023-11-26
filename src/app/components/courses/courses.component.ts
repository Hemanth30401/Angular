import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CoursesServiceService } from 'src/app/services/courses-service.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent 
{
  courses:any=[];
  courseId:any;
  // courses:any=[];
  employee:any=[];
  data: any;
  resultData:any=[];
  errorMessage: any=null;
  constructor(private _courseservice:CoursesServiceService)
  {
    
  }
  // constructor(private _courseservice:CoursesServiceService,
  //   private _router:Router,private _ar:ActivatedRoute){
  //     // this.courses=this._courseservice.getCourses();
  //   }
  ngOnInit(){

  //   // this.courses=this.__courseservice.getCourses();
  //   // console.log(this.courses);
  //   // this.getEmployeeData();
  //   // this.deleteProd2();
    // let promise =new Promise((res,error)=>{
    //   console.log("This is promise");
    //   res("Promise response 1");
    //   res("Promise response 2");
    // })
    // promise.then((res1)=>
    // {
    //   console.log(res1);
    // },(error)=>{
    //   console.log(error);
    // })
    // promise.then((res)=>console.log(res));
    
  //   let observable = new Observable((Res)=>{
  //     console.log("This is Observable");
  //     Res.next('Observable 1');
  //     Res.next('Observable 2');
  //     Res.next('Observable success 3');
  //   })
  //   observable.subscribe({
  //     next: async(res)=>{
  //     console.log(res);
  //     },
  //     error:(error)=>{
  //     console.log(error);
  //     }
  // })
  // }
  // ngOnDestroy(){
  //   console.log("Destroyed course");
  // }
  

  // deleteProd2(){
  //   this._courseservice.deleteProd1(1).subscribe
  //   ({
  //     next: (r)=>
  //     { 
  //       console.log(r);
  //       this.data=r;
  //     },
  //     error: (error)=>{
  //       // console.log(error.messsage);
  //       this.errorMessage=error.messsage;
  //     }
  // })
  // }

  // getEmployeeData(){
  //   this._courseservice.getEmpolyeeList().subscribe(
  //     (d) => {
  //       console.log(d);
  //       this.employee=d;
  //     }
  //   );
  // }
  
  }

  // onSelectCourse(course:any)
  // {
  //   this._router.navigate(['/selected-course', course.id]);
  // }
  
  // selected(course){
  //   this.courseId = this._ar.snapshot.paramMap.get('id');

  //   return course.id==this.courseId;
  // }

  
}