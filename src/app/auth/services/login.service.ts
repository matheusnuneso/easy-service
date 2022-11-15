import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private userAuth = false;

  showToolBarEmitter = new EventEmitter<boolean>();

  private readonly APIurl = "/assets/";

  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) { }

  userLogin(user: Partial<User>){
    if (user.password == '123456') {
      this.userAuth = true;
      this.showToolBarEmitter.emit(true);
      this.router.navigate(['/home']);

    } else {
      this.showToolBarEmitter.emit(false);
      this.userAuth = false;
    }
  }
}
