import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private userAuth = false;

  private readonly APIurl = "/assets/";

  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) { }

  userLogin(user: Partial<User>){
    if (user.password == '123456') {
      this.userAuth = true;
      this.router.navigate(['/home']);

    } else {
      this.userAuth = false;
    }
  }
}
