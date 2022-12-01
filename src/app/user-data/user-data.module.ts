import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserDataRoutingModule } from './user-data-routing.module';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [

    ProfileComponent
  ],
  imports: [
    CommonModule,
    UserDataRoutingModule,
    SharedModule
  ]
})
export class UserDataModule { }
