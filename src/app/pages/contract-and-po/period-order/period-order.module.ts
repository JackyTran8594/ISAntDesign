import { NgModule, ModuleWithProviders } from '@angular/core';
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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { PeriodOrderComponent } from './period-order.component';
import { PeriodOrderService } from './service/period-order.service';
import { PeriodOrderApi } from './service/period-order.api';
import { PeriodOrderData } from './service/period-order';
import { PeriodOrderRoutingModule } from './period-order-routing.module';
import { PeriodOrderFrmComponent } from './period-order-frm/period-order-frm.component';

const API = [
  PeriodOrderApi
]

const SERVICE = [
  {
    provide: PeriodOrderData, useClass: PeriodOrderService
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
    PeriodOrderComponent,
    PeriodOrderFrmComponent,
  ],
  imports: [
    CommonModule,
    PeriodOrderRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ...MODULES
  ]
})
export class PeriodOrderModule {
  static forRoot(): ModuleWithProviders<PeriodOrderRoutingModule> {
    return {
      ngModule: PeriodOrderModule,
      providers: [
        ...API,
        ...SERVICE,
      ]
    }
  }
}
