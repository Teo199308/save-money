import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from 'src/app/components/dashboard/dashboard.component';
import { MaterialModule } from 'src/app/modules/material.module';
import { SelectRandomNumberComponent } from './select-random-number/select-random-number.component';

const routes: Routes = [{
  path: '',
  component: DashboardComponent
}];


@NgModule({
  declarations: [
    DashboardComponent,
    SelectRandomNumberComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule
  ]
})
export class DashboardModule { }