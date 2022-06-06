import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuaranteeRoutingModule } from './guarantee-routing.module';
import { GuaranteeComponent } from './guarantee.component';


@NgModule({
  declarations: [
    GuaranteeComponent
  ],
  imports: [
    CommonModule,
    GuaranteeRoutingModule
  ]
})
export class GuaranteeModule { }
