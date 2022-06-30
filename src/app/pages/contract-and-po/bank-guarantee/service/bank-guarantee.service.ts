import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TableData } from 'src/app/@core/interface/TableData';
import { BankGuaranteeApi }  from './bank-guarantee.api';
import { BankGuarantee, BankGuaranteeData } from './bank-guarantee';

@Injectable()
export class BankGuaranteeService implements BankGuaranteeData {

  constructor(private api: BankGuaranteeApi) { }

  paging(pageNumber: number, pageSize: number, txtSearch: string): Observable<TableData<BankGuarantee>> {
    return this.api.paging(pageNumber, pageSize, txtSearch);
  }

  add(item: BankGuarantee): Observable<BankGuarantee> {
    return this.api.add(item);
  }

  update(item: BankGuarantee): Observable<BankGuarantee> {
    return this.api.update(item);
  }

  getById(id: number): Observable<BankGuarantee> {
    return this.api.getById(id);
  }

  delete(id: number): Observable<Boolean> {
    return this.api.delete(id);
  }

  deleteAll(listId: number[]): Observable<Boolean> {
    return this.api.deleteAll(listId);
  }
}
