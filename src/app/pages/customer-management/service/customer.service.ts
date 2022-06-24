import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TableData } from 'src/app/@core/interface/TableData';
import { Customer, CustomerData } from './customer';
import { CustomerApi } from './customer.api';

@Injectable()
export class CustomerService implements CustomerData {

  constructor(private api: CustomerApi) { }

  paging(pageNumber: number, pageSize: number, txtSearch: string): Observable<TableData<Customer>> {
    return this.api.paging(pageNumber, pageSize, txtSearch);
  }

  add(item: Customer): Observable<Customer> {
    return this.api.add(item);
  }

  update(item: Customer): Observable<Customer> {
    return this.api.update(item);
  }

  getById(id: number): Observable<Customer> {
    return this.api.getById(id);
  }

  delete(id: number): Observable<Boolean> {
    return this.api.delete(id);
  }

  deleteAll(listId: number[]): Observable<Boolean> {
    return this.api.deleteAll(listId);
  }
}
