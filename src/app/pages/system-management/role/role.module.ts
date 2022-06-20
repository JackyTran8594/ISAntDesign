import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoleRoutingModule } from './role-routing.module';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzTableModule } from 'ng-zorro-antd/table';
import { RoleFrmComponent } from './role-frm/role-frm.component';
import { RoleComponent } from './role.component';
import { FormsModule } from '@angular/forms';
import { RoleApi } from './service/role.api';
import { RoleData } from './service/role';
import { RoleService } from './service/role.service';


const API = [
  RoleApi
]

const SERVICE = [
  {
    provide: RoleData, useClass: RoleService
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
]


@NgModule({
  declarations: [
    RoleComponent,
    RoleFrmComponent
  ],
  imports: [
    CommonModule,
    RoleRoutingModule,
    FormsModule,
    ...MODULES
  ]
})
export class RoleModule {
  static forRoot(): ModuleWithProviders<RoleModule> {
    return {
      ngModule: RoleModule,
      providers: [
          ...API,
          ...SERVICE
      ]
    }
  }
}
