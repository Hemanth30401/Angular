import { Component } from '@angular/core';
// import {AngularMaterialModule} from 'src/app/modules/angular-material/angular-material.module';
@Component({
  selector: 'app-two-way-template',
  templateUrl: './two-way-template.component.html',
  styleUrls: ['./two-way-template.component.css']
})
export class TwoWayTemplateComponent {
  val1:any="";
  val2:string="";
  val3:string="";
    getInter(val:any)
    {
      this.val1=val;
    }
    getInterF(val:any){
      this.val2=val.value;
    }
    myObject:string="";


    getLoc(val:any){
      this.val3=val;
    }
    
}
