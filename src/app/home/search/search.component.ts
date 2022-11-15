import { User } from './../../models/user';
import { ServiceService } from './../../services/service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private serviceService: ServiceService) { }

  ngOnInit(): void {
  }

  onSearch(searchFilter: string){
    this.serviceService.getServices(searchFilter).subscribe({
      next: (r) => {console.log(r)}
    })
  }

}
