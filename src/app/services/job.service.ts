import { Job } from './../models/job';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  private readonly APIurl = "/assets/services.json";

  constructor(private httpClient: HttpClient) { }

  getServices() : Observable<Job[]>{
    return this.httpClient.get<Job[]>(this.APIurl);
  }
}
