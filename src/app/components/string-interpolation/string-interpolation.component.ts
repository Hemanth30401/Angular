import { Component } from '@angular/core';

@Component({
  selector: '.app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.css']
})
export class StringInterpolationComponent {
  public fullname: String = "Hemanth";
  
  stud = [
    {
      fname:'Dhoni',
      dop:null,
      age:2
    },
    {
      fname:'Kohli',
      dop:'delhi',
      age:32
    }
  ]
  x:number = 10;
  imgUrl:string = "https://www.akamai.com/site/im-demo/perceptual-standard.jpg";
  url="../../../assets/images/Tree_Image.jpg"; 

  URL="./assets/images/Pic2.jpg";
  getMyMeth(){
    // return `${this.fullname}`
    // return "Virat";
    return this.fullname;
  }
}
