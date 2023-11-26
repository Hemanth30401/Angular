import { transition } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-style-binding',
  templateUrl: './style-binding.component.html',
  styleUrls: ['./style-binding.component.css']
})
export class StyleBindingComponent {
  myColor:string="blue";
  cdg:any="gray";
  myFont:any='50px';
  myFS:any='italic';
  
  myStyling:object={
    color:'yellow',
    background:'lightblue',
    border:'5px solid red'
  }
  isRequired:boolean=true;
  myObjectGroup={
    border:'10px inset lavender',
    background:'orange'
  }
}
