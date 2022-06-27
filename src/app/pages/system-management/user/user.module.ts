import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { UserApi } from './service/user.api';
import { UserData } from './service/user';
import { UserService } from './service/user.service';
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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserFrmComponent } from '../user/user-frm/user-frm.component';


const API = [
  UserApi
]

const SERVICE = [
  {
    provide: UserData, useClass: UserService
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
    UserComponent,
    UserFrmComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ...MODULES

  ]
})
export class UserModule {
  static forRoot(): ModuleWithProviders<UserModule> {
    return {
      ngModule: UserModule,
      providers: [
        ...API,
        ...SERVICE
      ]
    }
  }
}
