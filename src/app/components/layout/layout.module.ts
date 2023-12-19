import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LayoutRoutingModule } from 'src/app/components/layout/layout-routing.module';
import { LayoutComponent } from 'src/app/components/layout/layout.component';
import { SidenavModule } from 'src/app/components/shared/sidenav/sidenav.module';


@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    SidenavModule
  ]
})
export class LayoutModule { }
