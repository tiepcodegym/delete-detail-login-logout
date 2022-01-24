import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {UserService} from "../services/user.service";
import {forkJoin} from "rxjs";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm?: FormGroup | any;

  constructor(private router: Router,
              private userService: UserService) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('',[Validators.required,Validators.email]),
      password: new FormControl('',[Validators.required]),
    })
  }

  get email(){
    return this.loginForm?.get('email')
  }

  get password(){
    return this.loginForm?.get('password')
  }

  loginSubmit (){
    let email =this.loginForm?.value.email
    let password =this.loginForm?.value.password
    let users= this.userService.getAll()
    for (let user of users) {
      if(user.email==email && user.password==password){
        localStorage.setItem('isLogin',String(true));
        this.router.navigate(['admin/users'])
      }
    }

  }



}
