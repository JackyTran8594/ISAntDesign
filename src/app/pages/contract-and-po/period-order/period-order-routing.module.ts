import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeriodOrderComponent } from './period-order.component';

const routes: Routes = [{
  path: '',
  component: PeriodOrderComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeriodOrderRoutingModule { }
