import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TableData } from 'src/app/@core/interface/TableData';
import { FunctionApi } from './function.api';
import { Function, FunctionData } from './function';

@Injectable()
export class FunctionService implements FunctionData {

  constructor(private api: FunctionApi) { }

  paging(pageNumber: number, pageSize: number, txtSearch: string): Observable<TableData<Function>> {
    return this.api.paging(pageNumber, pageSize, txtSearch);
  }

  add(item: Function): Observable<Function> {
    return this.api.add(item);
  }

  update(item: Function): Observable<Function> {
    return this.api.update(item);
  }

  getById(id: number): Observable<Function> {
    return this.api.getById(id);
  }

  delete(id: number): Observable<Boolean> {
    return this.api.delete(id);
  }

  deleteAll(listId: number[]): Observable<Boolean> {
    return this.api.deleteAll(listId);
  }
}
