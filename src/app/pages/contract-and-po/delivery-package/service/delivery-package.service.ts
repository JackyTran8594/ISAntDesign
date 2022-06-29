import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TableData } from 'src/app/@core/interface/TableData';
import { DeliveryPackageApi } from './delivery-package.api';
import { DeliveryPackage, DeliveryPackageData } from './delivery-package';

@Injectable()
export class DeliveryPackageService implements DeliveryPackageData {

  constructor(private api: DeliveryPackageApi) { }

  paging(pageNumber: number, pageSize: number, txtSearch: string): Observable<TableData<DeliveryPackage>> {
    return this.api.paging(pageNumber, pageSize, txtSearch);
  }

  add(item: DeliveryPackage): Observable<DeliveryPackage> {
    return this.api.add(item);
  }

  update(item: DeliveryPackage): Observable<DeliveryPackage> {
    return this.api.update(item);
  }

  getById(id: number): Observable<DeliveryPackage> {
    return this.api.getById(id);
  }

  delete(id: number): Observable<Boolean> {
    return this.api.delete(id);
  }

  deleteAll(listId: number[]): Observable<Boolean> {
    return this.api.deleteAll(listId);
  }
}
