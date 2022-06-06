import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlRoutingModule } from './pl-routing.module';
import { PlComponent } from './pl.component';


@NgModule({
  declarations: [
    PlComponent
  ],
  imports: [
    CommonModule,
    PlRoutingModule
  ]
})
export class PlModule { }
