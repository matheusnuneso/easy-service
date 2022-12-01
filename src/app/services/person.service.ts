import { Observable } from 'rxjs';
import { PersonDto } from './../models/personDto';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private readonly APIurl = "/assets/personDto.json";

  constructor(private httpClient: HttpClient) { }

  getPersonPerfil(id: number) : Observable<PersonDto> {
    return this.httpClient.get<PersonDto>(this.APIurl);
  }

}
