import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  private resultIndex: BehaviorSubject<any> = new BehaviorSubject<any>('');
  public resultIndex$: Observable<any> = this.resultIndex.asObservable();

  constructor(private router: Router) { }

  updateIndexNavigation(index: number){
    this.resultIndex.next(index);
  }

  getParamUrl(index: number){
    var arrayFullUrl = this.router.url.split('/');
    return arrayFullUrl[index];
  }
}
