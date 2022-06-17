import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { AuthData } from './auth';
import { AuthApi } from './auth.api';

@Injectable()
export class AuthService {

  constructor(private jwtHelper: JwtHelperService, private router: Router, private api: AuthApi) {

  }


  public isAuthenticated(): boolean {
    let isAuthenticated: boolean = true;
    const token = localStorage.getItem('access_token');
    if (token) {
      if (this.jwtHelper.isTokenExpired(token)) {
        isAuthenticated = false;
      } else {
        isAuthenticated = true
      }
    } else {
      isAuthenticated = false;
    }
    return isAuthenticated;
  }

  public logout() {
    localStorage.clear();
    // this.router.navigate(['auth/login'])
  }

  get tokenValue() {
    const token = localStorage.getItem('access_token');
    return token;
  }

  public authenticate(data?: any): Observable<any> {
    return this.api.authenticate(data);
  }


}
