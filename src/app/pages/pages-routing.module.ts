import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContractComponent } from './ContractAndPO/contract/contract.component';
import { DlComponent } from './ContractAndPO/dl/dl.component';
import { GuaranteeComponent } from './ContractAndPO/guarantee/guarantee.component';
import { PlComponent } from './ContractAndPO/pl/pl.component';
import { POComponent } from './ContractAndPO/po/po.component';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'welcome' },
      { path: 'welcome', loadChildren: () => import('../pages/welcome/welcome.module').then(m => m.WelcomeModule) },
      { path: 'contract', component: ContractComponent},
      { path: 'guarantee', component: GuaranteeComponent},
      { path: 'po', component: POComponent},
      { path: 'dl', component: DlComponent},
      { path: 'pl', component: PlComponent},
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
