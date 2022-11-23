import { NavigationService } from './../../services/navigation.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  userId: string;
  selectedIndex: number = 0;

  constructor(
    private actRoute: ActivatedRoute,
    private navigationServive: NavigationService
  ) {
    this.userId = this.actRoute.snapshot.params['id'];
    this.navigationServive.resultIndex$.subscribe(newIndex => this.selectedIndex = newIndex);
  }

  ngOnInit(): void {
    console.log(this.userId)
  }

  onjob(){
    console.log('aaaaaaaaa')
  }

}
