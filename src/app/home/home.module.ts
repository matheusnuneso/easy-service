import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from './../shared/shared.module';

import { HomeRoutingModule } from './home-routing.module';
import { NavigationComponent } from './navigation/navigation.component';
import { SearchComponent } from './search/search.component';
import { JobSignedComponent } from './job-signed/job-signed.component';
import { JobComponent } from './job/job.component';


@NgModule({
  declarations: [
    NavigationComponent,
    SearchComponent,
    JobSignedComponent,
    JobComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
