import { Component } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrls: ['./tdf.component.css'],
})
export class TDFComponent {
  branches = ['CSE','ECE','Mech','EEE'];
  userModel = new User('Hemanth','Manda','mhckdh30',true,'Ece',true);
  result:boolean;
  msg:any;
  constructor(private _prod:ProductsService){}
  onSubmit(){
    console.log(this.userModel);
    
    this._prod.postData(this.userModel).subscribe(
      (data)=>{
        console.log('success',data);
        this.result=true;
        this.msg=data;
      },
      (error)=>{
        console.log('error',error);
        this.result=false;
      }
    )
    
  }
}
