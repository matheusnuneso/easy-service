import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  private resultIndex: BehaviorSubject<any> = new BehaviorSubject<any>('');
  public resultIndex$: Observable<any> = this.resultIndex.asObservable();

  constructor() { }

  updateIndexNavigation(index: number){
    this.resultIndex.next(index);
  }
}
