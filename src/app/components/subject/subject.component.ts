import { Component } from '@angular/core';
import { BehaviorSubject, Subject, interval } from 'rxjs';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent {
  ngOnInit(){
    // let obs = interval(1000);
    // let sub1 = obs.subscribe((value)=>{
    //   console.log("1st subscriber" + value);
    // })

    

    // setTimeout(()=>{
    //   var sub2 = obs.subscribe((value)=>{
    //     console.log("2nd subscriber" + value);
    //    });
       
    //    sub1.unsubscribe();
    //    setTimeout(()=>{
    //     sub2.unsubscribe();
    //    },5000)
    // },5000);

    let sub = new Subject();
    let obs = interval(1000);

    obs.subscribe((value)=>{
      sub.next(value);
    })

    sub.subscribe((data)=>{
      console.log("1st: "+ data);
    })

    setTimeout(()=>{
      sub.subscribe((data)=>{
        console.log("2nd: " + data);
      })
    },5000)

    
    

  }
}
