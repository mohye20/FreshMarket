import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ResetPasswrodComponent } from './reset-passwrod/reset-passwrod.component';

const routes: Routes = [

  { path: "", redirectTo: "change", pathMatch: "full" },
  { path: "change", component: ChangePasswordComponent },
  { path: 'reset', component: ResetPasswrodComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
