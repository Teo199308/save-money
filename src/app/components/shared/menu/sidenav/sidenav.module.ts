import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidenavComponent } from 'src/app/components/shared/menu/sidenav/sidenav.component';
import { MaterialModule } from 'src/app/modules/material.module';

@NgModule({
  declarations: [SidenavComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports: [SidenavComponent]
})
export class SidenavModule { }
