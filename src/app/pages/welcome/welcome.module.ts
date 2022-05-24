import { NgModule } from '@angular/core';

import { WelcomeRoutingModule } from './welcome-routing.module';

import { WelcomeComponent } from './welcome.component';

import { NzCardModule } from 'ng-zorro-antd/card';

import { NzTableModule } from 'ng-zorro-antd/table';
import { WelcomeApi } from './service/welcome.api';
import { WelcomeService } from './service/welcome.service';
import { CommonModule } from '@angular/common';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { WelcomeFrmComponent } from './welcome-frm/welcome-frm.component';
import { NzModalModule } from 'ng-zorro-antd/modal';



const MODULES = [
  NzCardModule,
  NzTableModule,
  NzButtonModule,
  NzIconModule,
  NzDividerModule,
  NzModalModule 
]



@NgModule({
  imports: [WelcomeRoutingModule, CommonModule, ...MODULES],
  declarations: [WelcomeComponent, WelcomeFrmComponent],
  exports: [WelcomeComponent],
  providers: [
    WelcomeApi,
    WelcomeService
  ]
})
export class WelcomeModule { }
