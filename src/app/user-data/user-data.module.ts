import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserDataRoutingModule } from './user-data-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { UserJobsComponent } from './user-jobs/user-jobs.component';


@NgModule({
  declarations: [

    ProfileComponent,
      UserJobsComponent
  ],
  imports: [
    CommonModule,
    UserDataRoutingModule,
    SharedModule
  ]
})
export class UserDataModule { }
