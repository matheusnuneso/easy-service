import { Component, OnInit } from '@angular/core';
import { JobSigned } from './../../models/jobSigned';
import { JobSignedService } from './../../services/job-signed.service';

@Component({
  selector: 'app-job-signed',
  templateUrl: './job-signed.component.html',
  styleUrls: ['./job-signed.component.css']
})
export class JobSignedComponent implements OnInit {

  readonly displayedColumns = ['job', 'client', 'finalPrice'];

  jobsSigned: JobSigned[] = [];

  constructor(private jobSignedService: JobSignedService) {
    this.filltable();
  }

  ngOnInit(): void {
  }

  filltable(){
    this.jobSignedService.getJobSigned().subscribe((data) => {
      this.jobsSigned = data;
    })
  }

}
