import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TableData } from 'src/app/@core/interface/TableData';
import { Department, DepartmentData } from './department'
import { DepartmentApi } from './department.api';

@Injectable()
export class DepartmentService implements DepartmentData {

  constructor(private api: DepartmentApi) { }

  paging(pageNumber: number, pageSize: number, txtSearch: string): Observable<TableData<Department>> {
    return this.api.paging(pageNumber, pageSize, txtSearch);
  }

  add(item: Department): Observable<Department> {
    return this.api.add(item);
  }

  update(item: Department): Observable<Department> {
    return this.api.update(item);
  }

  getById(id: number): Observable<Department> {
    return this.api.getById(id);
  }

  delete(id: number): Observable<Boolean> {
    return this.api.delete(id);
  }

  deleteAll(listId: number[]): Observable<Boolean> {
    return this.api.deleteAll(listId);
  }
}
