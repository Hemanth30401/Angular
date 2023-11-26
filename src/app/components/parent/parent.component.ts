import { AfterContentChecked, Component, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements AfterContentChecked{
    myCh2:any;
    myC:any;
    getCh2(e){
      this.myCh2=e;
    }
    displayText:string="Welcome";
    myObj ={
      Name:'Sai',
      branch:'ECE',
      age:22
    }

    childData:string;
  
    getData(e) {
      this.childData=e;
    }

    child2D:string;
    getData2(s){
      this.child2D=s;
    }

    myParentData:string="Hello, are you ok?";

    @ViewChild(ChildComponent) myDataChild;
    @ViewChild(ChildComponent) myData2;
    @ViewChild(ChildComponent) myP;

    msgFromChild: any;
    msgFromChild2:any;
    msgCtoP:any;

    ngAfterContentChecked()
     {
      this.msgCtoP=this.myP?.msgCtoP;
      this.msgFromChild2=this.myData2?.msgFromChild2;
        this.msgFromChild = this.myDataChild?.msgFromChild;
    }

    getC1(e1){
      this.myC=e1;
    }

  
    
   
    
}
