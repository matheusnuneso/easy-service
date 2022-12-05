import { Person } from './../models/person';
import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Credentials } from '../models/credentials';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private userAuth = false;

  showToolBarEmitter = new EventEmitter<boolean>();

  private readonly APIurl = "http://localhost:8080/api/person/authPerson";

  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) { }

  userLogin(credentials: Credentials){
    console.log(credentials)
    this.httpClient.post<Person>(this.APIurl, credentials, { observe: 'response' }).subscribe(data => {

      if (data.status == 200) {
        this.userAuth = true;
        this.showToolBarEmitter.emit(true);
        this.router.navigate(['/home', data.body?.id]);
      } else {
        console.log('deu errado')
      }

    })

    /*this.httpClient.get<Credentials>(this.APIurl, { observe: 'response' }).subscribe(data => {
      console.log(data.status)
      this.userAuth = true;
      this.showToolBarEmitter.emit(true);
      this.router.navigate(['/home', data.body?.id]);
    })*/

  }

  logout(){
    this.showToolBarEmitter.emit(false);
  }

  getUserAuth(){
    return this.userAuth;
  }
}
