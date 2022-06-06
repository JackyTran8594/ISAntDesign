import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PORoutingModule } from './po-routing.module';
import { POComponent } from '../po/po.component';


@NgModule({
  declarations: [
    POComponent
  ],
  imports: [
    CommonModule,
    PORoutingModule
  ]
})
export class POModule { }
