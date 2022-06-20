import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TableData } from 'src/app/@core/interface/TableData';
import { Role, RoleData } from './role';
import { RoleApi } from './role.api';

@Injectable()
export class RoleService implements RoleData {

  constructor(private api: RoleApi) { }

  paging(pageNumber: number, pageSize: number, txtSearch: string): Observable<TableData<Role>> {
    return this.api.paging(pageNumber, pageSize, txtSearch);
  }

  add(item: Role): Observable<Role> {
    return this.api.add(item);
  }

  update(item: Role): Observable<Role> {
    return this.api.update(item);
  }

  getById(id: number): Observable<Role> {
    return this.api.getById(id);
  }

  delete(id: number): Observable<Boolean> {
    return this.api.delete(id);
  }

  deleteAll(listId: number[]): Observable<Boolean> {
    return this.api.deleteAll(listId);
  }
}
