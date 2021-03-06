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
      { path: 'department', loadChildren: () => import('./department-management/department-management.module').then(m => m.DepartmentManagementModule) },
      { path: 'pl', loadChildren: () => import('../pages/contract-and-po/packing-list/packing-list.module').then(m => m.PackingListModule) },
      { path: 'dp', loadChildren: () => import('../pages/contract-and-po/delivery-package/delivery-package.module').then(m => m.DeliveryPackageModule) },
      { path: 'function', loadChildren: () => import('../pages/system-management/function/function.module').then(m => m.FunctionModule) },
      { path: 'guarantee', loadChildren: () => import('../pages/contract-and-po/bank-guarantee/bank-guarantee.module').then(m => m.BankGuaranteeModule) },
      { path: 'po', loadChildren: () => import('../pages/contract-and-po/period-order/period-order.module').then(m => m.PeriodOrderModule) },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
