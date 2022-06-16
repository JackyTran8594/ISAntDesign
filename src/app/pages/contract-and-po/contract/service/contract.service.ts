import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TableData } from 'src/app/@core/interface/TableData';
import { Contract, ContractData } from './contract';
import { ContractApi } from './contract.api';

@Injectable()
export class ContractService implements ContractData {

  constructor(private api: ContractApi) { }

  paging(pageNumber: number, pageSize: number, txtSearch: string): Observable<TableData<Contract>> {
    return this.api.paging(pageNumber, pageSize, txtSearch);
  }

  add(item: Contract): Observable<Contract> {
    return this.api.add(item);
  }

  update(item: Contract): Observable<Contract> {
    return this.api.update(item);
  }

  getById(id: number): Observable<Contract> {
    return this.api.getById(id);
  }

  delete(id: number): Observable<Boolean> {
    return this.api.delete(id);
  }
  
  deleteAll(listId: number[]): Observable<Boolean> {
    return this.api.deleteAll(listId);
  }
}
