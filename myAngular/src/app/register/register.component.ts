import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm?: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      fullName: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.required,Validators.email]),
      password: new FormControl('',[Validators.required]),
      rePassword: new FormControl('')
    })
  }

  register(){
    console.log(this.registerForm?.value)
  }

  get email(){
    return this.registerForm?.get('email')
  }

  get fullName(){
    return this.registerForm?.get('fullName')
  }

  get password(){
    return this.registerForm?.get('password')
  }

}
