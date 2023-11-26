import { Component, ContentChild, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild, ViewChildren, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ChildComponent{
  @ViewChild("para") paragraph;
  @ViewChildren("heading") heading;
onClick() {
  console.log(this.paragraph.nativeElement.innerText);
    for(let ele of this.heading){
    console.log(ele.nativeElement.innerText);
    }
  }

@ContentChild('data1') india: ElementRef;
  ngAfterContentInit(){
    console.log(this.india)
  }



  ch1:any=30;

  child2:any="India";

  msgCtoP:any="Hello welcome to india!pakistanis";

  @Output() ch2 = new EventEmitter();

  sendCh1(){
    this.ch2.emit(this.ch1);
  }

  @Input() pData:string;
  @Input() myData:any;
  myChild:string="child to parent";
  ngOnInit(){
    console.log("Hey This is On Init hooks.It is Type of Life cycle.");
  }
  // ngOnChanges(changes: SimpleChanges){
  //   console.log("Hey This is Onchanges hooks.It is Type of Life cycle.");
  //   console.log(changes);
  // }
  constructor(){
    console.log("Hey this is constructor");
  }

  @Input() myChild3:any;
  ngOnChanges(changes: SimpleChanges)
  {
    console.log(changes)
  }

  @Output() msgtoParent = new EventEmitter();

  sendMsgtoParent(){
    this.msgtoParent.emit(this.myChild);
  }

  

  myChild2={
    name2:'Hemanth',
    course:'b.tech',
    per:77
  }
  @Output() msgToParent2 = new EventEmitter();

  sendMsg2(){
    this.msgToParent2.emit(this.myChild2);
  }

  msgFromChild:string="Hey I am child";
  msgFromChild2:any=32;

  @Output() mp = new EventEmitter();

  getC(){
    return this.mp.emit(this.child2);
  }
}
function ngAfterContentInit() {
  throw new Error('Function not implemented.');
}

