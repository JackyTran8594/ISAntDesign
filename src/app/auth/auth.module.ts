import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptorService } from './interceptor/auth-interceptor.service';
import { JwtInterceptorService } from './interceptor/jwt-interceptor.service';
import { AuthApi } from './service/auth.api';
import { AuthData } from './service/auth';
import { AuthService } from './service/auth.service';
import { AuthGuardService } from './service/auth-guard.service';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';

const API = [AuthApi]
const SERVICE = [
  // {
  //   provide: AuthData, useClass: AuthService
  // },
  AuthService,
  JwtHelperService
]


const GUARD = [AuthGuardService]

@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    NzButtonModule,
    NzFormModule,
    ReactiveFormsModule
  ],
  providers: [
  ]
})
export class AuthModule {
  static forRoot(): ModuleWithProviders<AuthModule> {
    return {
      ngModule: AuthModule,
      providers: [
        { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptorService, multi: true },
        { provide: JWT_OPTIONS, useValue: JWT_OPTIONS},
        ...API,
        ...SERVICE,
        ...GUARD
      ]
    }
  }
}
