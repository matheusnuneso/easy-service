import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NonNullableFormBuilder } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-job',
  templateUrl: './add-job.component.html',
  styleUrls: ['./add-job.component.css']
})
export class AddJobComponent {

  jobForm = this.formBuilder.group({
    userName: ['', [Validators.required]],
    password: ['', [Validators.required]],
    liveLink: ['', [Validators.required]]
  });

  constructor(
    public dialogRef: MatDialogRef<AddJobComponent>,
    private formBuilder: NonNullableFormBuilder
  ) { }

  ngOnInit(){}

  createJob(){
    console.log(this.jobForm.value)
  }

  cancel(){

  }

}
