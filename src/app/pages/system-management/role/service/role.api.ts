import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/@core/backend/common/http.service';
import { TableData } from 'src/app/@core/interface/TableData';
import { Role } from './role';

@Injectable()
export class RoleApi {

  private readonly apiController = 'role'

  constructor(private serviceBase: HttpService) { }

  paging(pageNumber: number, pageSize: number, txtSearch: string): Observable<TableData<Role>> {
    let params = new HttpParams()
    params.set('pageNumber', pageNumber)
    params.set('pageSize', pageSize)
    params.set('txtSearch', txtSearch)
    return this.serviceBase.get(this.apiController, { params });
  }

  add(item: Role): Observable<Role> {
    return this.serviceBase.post(this.apiController, item);
  }

  update(item: Role): Observable<Role> {
    return this.serviceBase.put(`${this.apiController}/${item.id}`, item);
  }

  getById(id: number): Observable<Role> {
    return this.serviceBase.get(`${this.apiController}/${id}`);
  }
  
  delete(id: number): Observable<Boolean> {
    return this.serviceBase.delete(`${this.apiController}/${id}`);
  }
  deleteAll(listId: number[]): Observable<Boolean> {
    return this.serviceBase.post(`${this.apiController}/deleteAll`, listId);
  }
}
