import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TableData } from 'src/app/@core/interface/TableData';
import { User, UserData } from './user';
import { UserApi } from './user.api';

@Injectable()
export class UserService implements UserData {

  constructor(private api: UserApi) { }

  paging(pageNumber: number, pageSize: number, txtSearch: string): Observable<TableData<User>> {
    return this.api.paging(pageNumber, pageSize, txtSearch);
  }

  add(item: User): Observable<User> {
    return this.api.add(item);
  }

  update(item: User): Observable<User> {
    return this.api.update(item);
  }

  getById(id: number): Observable<User> {
    return this.api.getById(id);
  }

  delete(id: number): Observable<Boolean> {
    return this.api.delete(id);
  }
  
  deleteAll(listId: number[]): Observable<Boolean> {
    return this.api.deleteAll(listId);
  }
}
