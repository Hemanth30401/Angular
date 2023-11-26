import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {

  myCheck:boolean=true;
  matchingValue:string="Three";
  
  names=['Hemanth','Kohli','Dhoni','Rohit'];

  team:string="india";
  emp:object=[
    {
      country:'Ind',
      code:'i'
    },
    {
      country:'aus',
      code:'a'
    }
  ]
}
