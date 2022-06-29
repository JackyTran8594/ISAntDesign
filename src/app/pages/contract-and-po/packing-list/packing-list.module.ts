import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzTableModule } from 'ng-zorro-antd/table';
import { PackingListApi } from './service/packing-list.api';
import { PackingListData } from './service/packing-list';
import { PackingListService } from './service/packing-list.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { PackingListRoutingModule } from './packing-list-routing.module';
import { PackingListComponent } from './packing-list.component';
import { PackingListFrmComponent } from './packing-list-frm/packing-list-frm.component';

const API = [
  PackingListApi
]

const SERVICE = [
  {
    provide: PackingListData, useClass: PackingListService
  }
]

const MODULES = [
  NzCardModule,
  NzTableModule,
  NzButtonModule,
  NzIconModule,
  NzDividerModule,
  NzModalModule,
  NzSpaceModule,
  NzInputModule,
  NzGridModule,
  NzDatePickerModule,
  NzCollapseModule,
  NzPaginationModule,
  NzPopconfirmModule,
  NzNotificationModule,
  NzFormModule,
  NzInputNumberModule,
  NzCheckboxModule
]

@NgModule({
  declarations: [
    PackingListComponent,
    PackingListFrmComponent,
  ],
  imports: [
    CommonModule,
    PackingListRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ...MODULES
  ]
})
export class PackingListModule {
  static forRoot(): ModuleWithProviders<PackingListModule> {
    return {
      ngModule: PackingListModule,
      providers: [
        ...API,
        ...SERVICE,
      ]
    }
  }
}
