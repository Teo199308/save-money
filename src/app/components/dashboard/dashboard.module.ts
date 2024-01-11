import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from 'src/app/components/dashboard/dashboard.component';
import { MaterialModule } from 'src/app/modules/material.module';
import { CurrentBalanceComponent } from './cards/current-balance/current-balance.component';
import { GoalComponent } from './cards/goal/goal.component';
import { LastNumberComponent } from './cards/last-number/last-number.component';
import { SelectRandomNumberComponent } from './select-random-number/select-random-number.component';
import { SharedCardComponent } from './cards/shared-card/shared-card.component';

const routes: Routes = [{
  path: '',
  component: DashboardComponent
}];


@NgModule({
  declarations: [
    DashboardComponent,
    SelectRandomNumberComponent,
    CurrentBalanceComponent,
    LastNumberComponent,
    GoalComponent,
    SharedCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule
  ]
})
export class DashboardModule { }
