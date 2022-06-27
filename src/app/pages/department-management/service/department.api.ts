import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/@core/backend/common/http.service';
import { TableData } from 'src/app/@core/interface/TableData';
import { Department } from './department';

@Injectable()
export class DepartmentApi {

  private readonly apiController = 'department'

  constructor(private serviceBase: HttpService) { }

  paging(pageNumber: number, pageSize: number, txtSearch: string): Observable<TableData<Department>> {
    let params = new HttpParams()
    .set('pageNumber', `${pageNumber}`)
    .set('pageSize', `${pageSize}`)

    return this.serviceBase.get(this.apiController, { params });
  }

  add(item: Department): Observable<Department> {
    return this.serviceBase.post(this.apiController, item);
  }

  update(item: Department): Observable<Department> {
    return this.serviceBase.put(`${this.apiController}/${item.id}`, item);
  }

  getById(id: number): Observable<Department> {
    return this.serviceBase.get(`${this.apiController}/${id}`);
  }

  delete(id: number): Observable<Boolean> {
    return this.serviceBase.delete(`${this.apiController}/${id}`);
  }
  deleteAll(listId: number[]): Observable<Boolean> {
    return this.serviceBase.post(`${this.apiController}/deleteAll`, listId);
  }
}
