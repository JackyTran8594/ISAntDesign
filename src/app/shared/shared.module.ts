import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeleteComponent } from './component/delete/delete.component';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzButtonModule } from 'ng-zorro-antd/button';



@NgModule({
  declarations: [
    DeleteComponent
  ],
  imports: [
    CommonModule,
    NzModalModule,
    NzButtonModule
  ]
})
export class SharedModule { }
