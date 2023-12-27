import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidenavComponent } from 'src/app/components/shared/menu/sidenav/sidenav.component';
import { ToolbarComponent } from 'src/app/components/shared/menu/toolbar/toolbar.component';
import { MaterialModule } from 'src/app/modules/material.module';
import { MenuComponent } from './menu.component';

@NgModule({
  declarations: [
    MenuComponent,
    ToolbarComponent,
    SidenavComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports: [
    MenuComponent
  ]
})
export class MenuModule { }
