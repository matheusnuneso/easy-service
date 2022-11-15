import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private readonly APIurl = "/assets/services.json";

  constructor(private httpClient: HttpClient) { }

  getServices(filter: string) : Observable<User>{
    return this.httpClient.get<User>(this.APIurl);
  }
}
