import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LayoutRoutingModule } from 'src/app/components/layout/layout-routing.module';
import { LayoutComponent } from 'src/app/components/layout/layout.component';
import { MenuModule } from 'src/app/components/shared/menu/menu.module';


@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    MenuModule
  ]
})
export class LayoutModule { }
