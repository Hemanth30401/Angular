import { Component } from '@angular/core';
import { Observable, interval, map, take } from 'rxjs';

@Component({
  selector: 'app-async-pipe',
  templateUrl: './async-pipe.component.html',
  styleUrls: ['./async-pipe.component.css']
})
export class AsyncPipeComponent {
  promise: Promise<{}>;
  observable$: Observable<number>;
  observableData: number;
  constructor(){}
  ngOnInit(){
    this.promise=this.getPromises();
    this.observable$=this.getObservable();
    this.subscribeObservable(); 
    console.log("ngOnit");
  }

  getPromises() {
    return new Promise((res)=>{
      setTimeout(
        ()=>{
          res("This is new Promise");
        },5000)
    })
  }

  getObservable() {
    return interval(1000).pipe(take(10), map(value => value+1))
  }
  

  subscribeObservable(){
    this.observable$.subscribe((value)=>{
      this.observableData=value;
    })
  }


}
