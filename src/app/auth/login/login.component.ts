import { Component, OnInit } from '@angular/core';
import { FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = this.formBuilder.group({
    name: [''],
    password: ['']
  });

  constructor(
    private formBuilder: NonNullableFormBuilder,
  ) { }

  ngOnInit(): void {}

  public onLogin(){
    console.log(this.loginForm.value)
  }

}
