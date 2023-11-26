import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css'],
})
export class ReactiveFormsComponent {
  // registrationForm = new FormGroup({
  //   userName: new FormControl('Hem'),
  //   email: new FormControl(''),
  //   password: new FormControl(),
  //   ConfirmPassword: new FormControl(),
  //   address: new FormGroup({
  //     State: new FormControl(''),
  //     city: new FormControl(''),
  //     pincode: new FormControl(''),
  //   }),
  // })

  constructor(private _formBuilder: FormBuilder){}

   registrationForm = this._formBuilder.group({
    userName:['',[Validators.required,Validators.minLength(3)]],
    email:['cd11@gmail.com'],
    password:['999'],
    confirmPassword:[],
    address: this._formBuilder.group({
      state:[],
      city:[],
      pincode:[]
    })
  })

  onDisplay(){
    this.registrationForm.setValue({  
      userName:'Hemanth@12',
      email:'hh1@gmail.com',
      password: '7777',
      confirmPassword: '7777',
      address: {
        state:'TG',
        city:'HYD',
        pincode:'500092',
      }
    })
  }

  onDisplay1(){
    this.registrationForm.patchValue({  //non-strict
      userName:'Hemanth@12',
      email:'hh1@gmail.com',
      password: '7777',
      confirmPassword: '7777',
      address: {
        state:'TG',
        city:'HYD',
        pincode:'500092',
      }
    })
  }

}
