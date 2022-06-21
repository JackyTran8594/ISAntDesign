import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer.component';
import { CustomerFrmComponent } from './customer-frm/customer-frm.component';
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
import { CustomerApi } from './service/customer.api';
import { CustomerData } from './service/customer';
import { CustomerService } from './service/customer.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';

const API = [
  CustomerApi
]

const SERVICE = [
  {
    provide: CustomerData, useClass: CustomerService
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
    CustomerComponent,
    CustomerFrmComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ...MODULES
  ]
})
export class CustomerModule { 
  static forRoot(): ModuleWithProviders<CustomerModule> {
    return {
      ngModule: CustomerModule,
      providers: [
        ...API,
        ...SERVICE,
      ]
    }
  }
}
