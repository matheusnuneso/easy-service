import { Component, OnInit } from '@angular/core';
import { JobService } from './../../services/job.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private jobService: JobService) { }

  ngOnInit(): void {
  }

  onSearch(searchFilter: string){
    this.jobService.getServices(searchFilter).subscribe({
      next: (r) => {console.log(r)}
    })
  }

}
