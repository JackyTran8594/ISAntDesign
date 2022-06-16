import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContractModule } from '../pages/contract-and-po/contract/contract.module';
import { throwIfAlreadyLoaded } from './module-import-guard';
import { HttpService } from './backend/common/http.service';

const SERVICE = [
  HttpService
]

export const CORE_PROVIDERS = [
  ContractModule.forRoot().providers
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule
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



