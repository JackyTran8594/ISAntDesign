import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/@core/backend/common/http.service';
import { TableData } from 'src/app/@core/interface/TableData';
import { Contract } from './contract';

@Injectable()
export class ContractApi {

  private readonly apiController = 'contract'

  constructor(private serviceBase: HttpService) { }

  paging(pageNumber: number, pageSize: number, txtSearch: string): Observable<TableData<Contract>> {
    let params = new HttpParams()
    params.set('pageNumber', pageNumber)
    params.set('pageSize', pageSize)
    params.set('txtSearch', txtSearch)
    return this.serviceBase.get(this.apiController, { params });
  }

  add(item: Contract): Observable<Contract> {
    return this.serviceBase.post(this.apiController, item);
  }

  update(item: Contract): Observable<Contract> {
    return this.serviceBase.put(`${this.apiController}/${item.id}`, item);
  }

  getById(id: number): Observable<Contract> {
    return this.serviceBase.get(`${this.apiController}/${id}`);
  }
  
  delete(id: number): Observable<Boolean> {
    return this.serviceBase.delete(`${this.apiController}/${id}`);
  }
  deleteAll(listId: number[]): Observable<Boolean> {
    return this.serviceBase.post(`${this.apiController}/deleteAll`, listId);
  }
}
