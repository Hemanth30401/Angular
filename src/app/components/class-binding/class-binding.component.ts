import { Component } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  templateUrl: './class-binding.component.html',
  styleUrls: ['./class-binding.component.css']
})
export class ClassBindingComponent {
    myGroup:string="myGroup";
    
    myFonts={
      textColor:"textColor",
      textSize:"textSize"
    }
    isRequired(){
      return true
    }
    isIt:string='isIt';
    isRequired1:boolean=true;
}
