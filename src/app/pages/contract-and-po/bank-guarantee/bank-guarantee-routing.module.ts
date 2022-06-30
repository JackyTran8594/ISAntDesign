import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BankGuaranteeComponent } from './bank-guarantee.component';

const routes: Routes = [{
  path: '',
  component: BankGuaranteeComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BankGuaranteeRoutingModule { }
