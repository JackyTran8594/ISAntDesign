import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PackingListRoutingModule } from './packing-list-routing.module';
import { PackingListComponent } from './packing-list.component';


@NgModule({
  declarations: [
    PackingListComponent
  ],
  imports: [
    CommonModule,
    PackingListRoutingModule
  ]
})
export class PackingListModule { }
