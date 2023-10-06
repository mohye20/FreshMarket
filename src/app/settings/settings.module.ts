import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SettingsRoutingModule } from './settings-routing.module';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ResetPasswrodComponent } from './reset-passwrod/reset-passwrod.component';

import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    ChangePasswordComponent,
    ResetPasswrodComponent
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
  ]
})
export class SettingsModule { }
