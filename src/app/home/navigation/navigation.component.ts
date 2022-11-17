import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  userId: string;
  constructor(private actRoute: ActivatedRoute) {
    this.userId = this.actRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    console.log(this.userId)
  }

}
