import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private msgsrc = new BehaviorSubject('default');
  public currentmsg = this.msgsrc.asObservable();
  constructor() { }

  changemsg(message:string)
  {
    this.msgsrc.next(message);
  }
}
