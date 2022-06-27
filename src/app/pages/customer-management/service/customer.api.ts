import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/@core/backend/common/http.service';
import { TableData } from 'src/app/@core/interface/TableData';
import { Customer } from './customer';

@Injectable()
export class CustomerApi {
  private readonly apiController = 'customer'

  constructor(private serviceBase: HttpService) { }

  paging(pageNumber: number, pageSize: number, txtSearch: string): Observable<TableData<Customer>> {
    const params = new HttpParams()
    params.set('pageNumber', pageNumber)
    params.set('pageSize', pageSize)
    params.set('txtSearch', txtSearch)

    return this.serviceBase.get(this.apiController, { params });
  }

  add(item: Customer): Observable<Customer> {
    return this.serviceBase.post(this.apiController, item);
  }

  update(item: Customer): Observable<Customer> {
    return this.serviceBase.put(`${this.apiController}/${item.id}`, item);
  }

  getById(id: number): Observable<Customer> {
    return this.serviceBase.get(`${this.apiController}/${id}`);
  }

  delete(id: number): Observable<Boolean> {
    return this.serviceBase.delete(`${this.apiController}/${id}`);
  }
  deleteAll(listId: number[]): Observable<Boolean> {
    return this.serviceBase.post(`${this.apiController}/deleteAll`, listId);
  }
}
