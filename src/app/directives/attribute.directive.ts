import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appAttribute]'
})
export class AttributeDirective {

  constructor(private _eleRef: ElementRef) {
      this._eleRef.nativeElement.style.background='red';
   }

   @HostListener("mouseenter") mouseEnter(){
    this.changeColor("yellow");
   }

   @HostListener("mouseout") mouseOut(){
    this.change1("red");
   }

   
   change1(val){
    this._eleRef.nativeElement.style.background = val;
   }
   changeColor(val){
    this._eleRef.nativeElement.style.background=val;
   }

   

}
