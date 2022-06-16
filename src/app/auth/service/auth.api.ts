import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/@core/backend/common/http.service';

@Injectable()
export class AuthApi {

  private readonly apiController = 'authenticate/login';

  constructor(private http: HttpService) {

  }

  authenticate(data: any): Observable<any> {
    return this.http.post(`${this.apiController}`, data);
  }

 
}
