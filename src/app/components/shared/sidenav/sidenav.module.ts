import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SidenavComponent } from 'src/app/components/shared/sidenav/sidenav.component';
import { MaterialModule } from 'src/app/modules/material.module';

@NgModule({
  declarations: [SidenavComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [SidenavComponent]
})
export class SidenavModule { }
