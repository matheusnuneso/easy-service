import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Credentials } from '../models/credentials';
import { Person } from './../models/person';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private userAuth = false;

  showToolBarEmitter = new EventEmitter<boolean>();

  private readonly APIurl = "http://localhost:8080/api/person/authPerson";

  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private _snackBar: MatSnackBar
  ) { }

  userLogin(credentials: Credentials){
    this.httpClient.post<Person>(this.APIurl, credentials, { observe: 'response' })
      .subscribe({
        next: (n) => {this.loginSuccess(n.body?.id)},
        error: (r) => {this.loginError(r.error)}
      })
  }

  logout(){
    this.showToolBarEmitter.emit(false);
  }

  getUserAuth(){
    return this.userAuth;
  }

  loginError(message: string){
    this._snackBar.open(message, 'OK', { duration: 5000 })
  }

  loginSuccess(id: any){
    this.userAuth = true;
    this.showToolBarEmitter.emit(true);
    this.router.navigate(['/home', id]);
  }
}
