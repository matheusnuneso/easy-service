import { Credentials } from './../../models/credentials';
import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = this.formBuilder.group({
    userName: [''],
    password: ['']
  });

  credentials: Credentials | undefined;

  constructor(
    private loginService: LoginService,
    private formBuilder: NonNullableFormBuilder
  ) {}

  ngOnInit(): void {}

  public onLogin(){
    this.credentials = {
      userName: this.loginForm.value.userName,
      password: this.loginForm.value.password
    };

    this.loginService.userLogin(this.credentials);
  }

}
