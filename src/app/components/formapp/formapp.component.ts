import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-formapp',
  templateUrl: './formapp.component.html',
  styleUrls: ['./formapp.component.css']
})
export class FormappComponent 
{
  

  constructor(private _formBuild:FormBuilder){}
    registerForm = this._formBuild.group({
    firstName:['Hemanth',[Validators.required]],
    middleName:['Reddy'],
    lastName:['Manda',Validators.required],
    email:['john11@gmail.com',Validators.required],
    password:['1234',[Validators.required,Validators.minLength(5)]],
    confirmPassword:['1234',[Validators.required,Validators.minLength(5)]],
    mobileNumber:['9999996587',[Validators.required,Validators.minLength(10)]],
    address:['Hyd',[Validators.required]],
    pincode:['500092',[Validators.required]],
  })

  onDisplay(){
    this.registerForm.setValue({
    firstName:'Raj',
    middleName:'Rao',
    lastName:'Mared',
    email:'john11@gmail.com',
    password:'12345',
    confirmPassword:'12345',
    mobileNumber:'701320327',
    address:'Chn',
    pincode:'500092',
  })
}
}
