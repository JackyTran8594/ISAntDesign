import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeliveryPackageComponent } from './delivery-package.component';

const routes: Routes = [{
  path: '',
  component: DeliveryPackageComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeliveryPackageRoutingModule { }
