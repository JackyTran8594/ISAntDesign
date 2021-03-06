import { CommonModule } from '@angular/common';
import { DeleteComponent } from './component/delete/delete.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NgModule } from '@angular/core';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzFormModule } from 'ng-zorro-antd/form';

const MODULES = [
  NzCardModule,
  NzButtonModule,
  NzIconModule,
  NzModalModule,
  NzFormModule
]

@NgModule({
  declarations: [
    DeleteComponent
  ],
  imports: [
    CommonModule,
    ...MODULES
  ]
})
export class SharedModule {
 
}
