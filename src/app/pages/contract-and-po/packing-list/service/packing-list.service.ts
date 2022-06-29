import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TableData } from 'src/app/@core/interface/TableData';
import { PackingList, PackingListData } from './packing-list';
import { PackingListApi } from './packing-list.api';

@Injectable()
export class PackingListService implements PackingListData {

  constructor(private api: PackingListApi) { }

  paging(pageNumber: number, pageSize: number, txtSearch: string): Observable<TableData<PackingList>> {
    return this.api.paging(pageNumber, pageSize, txtSearch);
  }

  add(item: PackingList): Observable<PackingList> {
    return this.api.add(item);
  }

  update(item: PackingList): Observable<PackingList> {
    return this.api.update(item);
  }

  getById(id: number): Observable<PackingList> {
    return this.api.getById(id);
  }

  delete(id: number): Observable<Boolean> {
    return this.api.delete(id);
  }

  deleteAll(listId: number[]): Observable<Boolean> {
    return this.api.deleteAll(listId);
  }
}
