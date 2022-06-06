import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DlRoutingModule } from './dl-routing.module';
import { DlComponent } from './dl.component';


@NgModule({
  declarations: [
    DlComponent
  ],
  imports: [
    CommonModule,
    DlRoutingModule
  ]
})
export class DlModule { }
