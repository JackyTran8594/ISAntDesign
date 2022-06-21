import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'welcome' },
      { path: 'welcome', loadChildren: () => import('../pages/welcome/welcome.module').then(m => m.WelcomeModule) },
      { path: 'contract', loadChildren: () => import('../pages/contract-and-po/contract/contract.module').then(m => m.ContractModule) },
      { path: 'role', loadChildren: () => import('../pages/system-management/role/role.module').then(m => m.RoleModule) },
      { path: 'user', loadChildren: () => import('../pages/system-management/user/user.module').then(m => m.UserModule) },
      { path: 'customer', loadChildren: () => import('../pages/customer-management/customer.module').then(m => m.CustomerModule) },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
