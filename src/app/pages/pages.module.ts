import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NZ_I18N, vi_VN } from 'ng-zorro-antd/i18n';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { IconsProviderModule } from '../icons-provider.module';
import { ContractModule } from './ContractAndPO/contract/contract.module';
import { GuaranteeModule } from './ContractAndPO/guarantee/guarantee.module';
import { PlModule } from './ContractAndPO/pl/pl.module';
import { POModule } from './ContractAndPO/po/po.module';
import { DlModule } from './ContractAndPO/dl/dl.module';


@NgModule({
  declarations: [
    PagesComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    NzLayoutModule,
    NzMenuModule,
    NzButtonModule,
    NzIconModule,
    IconsProviderModule,
    ContractModule,
    GuaranteeModule,
    PlModule,
    POModule,
    DlModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: vi_VN }],
})
export class PagesModule { }
