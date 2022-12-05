import { Observable } from 'rxjs';
import { PersonDto } from './../models/personDto';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { globalUrlApi } from '../global-variables';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private readonly APIurl = `${globalUrlApi}person`;;

  constructor(private httpClient: HttpClient) { }

  getPersonPerfil(id: number) : Observable<PersonDto> {
    return this.httpClient.get<PersonDto>(`${this.APIurl}/${id}`);
  }

}
