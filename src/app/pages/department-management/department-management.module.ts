import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartmentManagementRoutingModule } from './department-management-routing.module';
import { DepartmentManagementComponent } from './department-management.component';
import { DepartmentFrmComponent } from './department-frm/department-frm.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzTableModule } from 'ng-zorro-antd/table';
import { DepartmentApi } from './service/department.api';
import { DepartmentService } from './service/department-management.service';
import { DepartmentData } from './service/department';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';

const API = [
  DepartmentApi
]

const SERVICE = [
  {
    provide: DepartmentData, useClass: DepartmentService
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
    DepartmentManagementComponent,
    DepartmentFrmComponent,
  ],
  imports: [
    CommonModule,
    DepartmentManagementRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ...MODULES
  ]
})
export class DepartmentManagementModule {
  static forRoot(): ModuleWithProviders<DepartmentManagementModule> {
    return {
      ngModule: DepartmentManagementModule,
      providers: [
        ...API,
        ...SERVICE
      ]
    }
  }
}
