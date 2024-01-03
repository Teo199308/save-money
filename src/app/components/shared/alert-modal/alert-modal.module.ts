import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/app/modules/material.module';
import { AlertModalComponent } from './alert-modal.component';

@NgModule({
  declarations: [
    AlertModalComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
})
export class AlertModalModule { }
