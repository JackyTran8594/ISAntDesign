import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TableData } from 'src/app/@core/interface/TableData';
import { PeriodOrderApi }  from './period-order.api';
import { PeriodOrder, PeriodOrderData } from './period-order';

@Injectable()
export class PeriodOrderService implements PeriodOrderData {

  constructor(private api: PeriodOrderApi) { }

  paging(pageNumber: number, pageSize: number, txtSearch: string): Observable<TableData<PeriodOrder>> {
    return this.api.paging(pageNumber, pageSize, txtSearch);
  }

  add(item: PeriodOrder): Observable<PeriodOrder> {
    return this.api.add(item);
  }

  update(item: PeriodOrder): Observable<PeriodOrder> {
    return this.api.update(item);
  }

  getById(id: number): Observable<PeriodOrder> {
    return this.api.getById(id);
  }

  delete(id: number): Observable<Boolean> {
    return this.api.delete(id);
  }

  deleteAll(listId: number[]): Observable<Boolean> {
    return this.api.deleteAll(listId);
  }
}
