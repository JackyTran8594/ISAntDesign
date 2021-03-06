import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContractModule } from '../pages/contract-and-po/contract/contract.module';
import { throwIfAlreadyLoaded } from './module-import-guard';
import { HttpService } from './backend/common/http.service';
import { RoleModule } from '../pages/system-management/role/role.module';
import { UserModule } from '../pages/system-management/user/user.module';
import { CustomerModule } from '../pages/customer-management/customer.module';
import { DepartmentManagementModule } from '../pages/department-management/department-management.module';
import { PackingListModule } from '../pages/contract-and-po/packing-list/packing-list.module';
import { DeliveryPackageModule } from '../pages/contract-and-po/delivery-package/delivery-package.module';
import { FunctionModule } from '../pages/system-management/function/function.module';
import { BankGuaranteeModule } from '../pages/contract-and-po/bank-guarantee/bank-guarantee.module';
import { PeriodOrderModule } from '../pages/contract-and-po/period-order/period-order.module';

const SERVICE = [
  HttpService
]


export const CORE_PROVIDERS = [
  ContractModule.forRoot().providers,
  RoleModule.forRoot().providers,
  UserModule.forRoot().providers,
  CustomerModule.forRoot().providers,
  DepartmentManagementModule.forRoot().providers,
  PackingListModule.forRoot().providers,
  DeliveryPackageModule.forRoot().providers,
  FunctionModule.forRoot().providers,
  BankGuaranteeModule.forRoot().providers,
  PeriodOrderModule.forRoot().providers,
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [

  ]
})
export class CoreModule {

  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }

  static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [
        CORE_PROVIDERS,
        SERVICE
      ]
    }
  }

}



