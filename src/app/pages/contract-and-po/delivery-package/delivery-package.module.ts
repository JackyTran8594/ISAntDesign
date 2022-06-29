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
import { DeliveryPackageRoutingModule } from './delivery-package-routing.module';
import { DeliveryPackageComponent } from './delivery-package.component';
import { DeliveryPackageService } from './service/delivery-package.service';
import { DeliveryPackageApi } from './service/delivery-package.api';
import { DeliveryPackageData } from './service/delivery-package';
import { DeliveryPackageFrmComponent } from './delivery-package-frm/delivery-package-frm.component';

const API = [
  DeliveryPackageApi
]

const SERVICE = [
  {
    provide: DeliveryPackageData, useClass: DeliveryPackageService
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
    DeliveryPackageComponent,
    DeliveryPackageFrmComponent
  ],
  imports: [
    CommonModule,
    DeliveryPackageRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ...MODULES
  ]
})
export class DeliveryPackageModule {
  static forRoot(): ModuleWithProviders<DeliveryPackageModule> {
    return {
      ngModule: DeliveryPackageModule,
      providers: [
        ...API,
        ...SERVICE,
      ]
    }
  }
}
