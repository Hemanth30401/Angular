import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent {
  onClick(){
    console.log("You Clicked");
  }
  onDoubleClick(){
    prompt("You doubled clicked this message","Enter name");
  }
  onMouse(){
    alert("Your cursor is on the image");
  }
  onOut(){
    confirm("You have gone out of image");
  }
  mouseMove(){
    alert("Hemanth");
  }
  keyDown(){
    alert("You have Key Downed it");
  }
  keyUp(){
    alert("You have Moved the key");
  }
  keyPress(){
    alert("You have pressed the key");
  }
  onfocus(){
    confirm("Focus is onnn");
  }
  onInput(){
    alert("input");
  }

}
