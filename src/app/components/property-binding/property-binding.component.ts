import { Component } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent 
{
  name:String="India";
  name1:any="IND";
  isDisabled:boolean=false;
}
