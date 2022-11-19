import { Component, OnInit } from '@angular/core';
import { JobSigned } from './../../models/jobSigned';

@Component({
  selector: 'app-job-signed',
  templateUrl: './job-signed.component.html',
  styleUrls: ['./job-signed.component.css']
})
export class JobSignedComponent implements OnInit {

  readonly displayedColumns = ['job', 'client', 'finalPrice'];

  jobsSigned: JobSigned[] = [
    {id: 1, idJob: 1, idClient:1, idProvider: 2, finalPrice: 99.99}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
