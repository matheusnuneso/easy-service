import { JobService } from './../../services/job.service';
import { Component } from '@angular/core';
import { Job } from 'src/app/models/job';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent {

  listJobs: Job[] = [];

  constructor(private jobService: JobService) {
    this.fillListJobs();
  }

  fillListJobs(){
    this.jobService.getServices().subscribe((data) => {
      this.listJobs = data;
    })
  }

}
