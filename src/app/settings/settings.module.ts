import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ResetPasswrodComponent } from './reset-passwrod/reset-passwrod.component';


@NgModule({
  declarations: [
    ChangePasswordComponent,
    ResetPasswrodComponent
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule
  ]
})
export class SettingsModule { }
