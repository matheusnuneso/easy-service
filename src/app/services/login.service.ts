import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { isEmpty, Observable } from 'rxjs';
import { User } from './../models/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private userAuth = false;

  showToolBarEmitter = new EventEmitter<boolean>();

  private readonly APIurl = "/assets/user.json";

  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) { }

  userLogin(user: Partial<User>){
    /*if (user.password == '123456') {
      this.userAuth = true;
      this.showToolBarEmitter.emit(true);
      this.router.navigate(['/home']);

    } else {
      this.showToolBarEmitter.emit(false);
      this.userAuth = false;
    }*/

    this.httpClient.get<User>(this.APIurl, { observe: 'response' }).subscribe(data => {
      console.log(data.status)
      this.userAuth = true;
      this.showToolBarEmitter.emit(true);
      this.router.navigate(['/home', data.body?.id]);
    })

  }

  logout(){
    this.showToolBarEmitter.emit(false);
  }

  getUserAuth(){
    return this.userAuth;
  }
}
