import { Observable } from "rxjs";
import { BaseObject } from "src/app/@core/interface/baseObject";
import { TableData } from "src/app/@core/interface/TableData";

export interface User extends BaseObject {
    id?: number;
    username?: string;
    code?: string;
    fullname?: string;
    email?: string;
    phoneNumber?: string;
}

export abstract class UserData {
    abstract paging(pageNumber: number, pageSize: number, txtSearch: string): Observable<TableData<User>>
    abstract add(item: User): Observable<User>
    abstract update(item: User): Observable<User>
    abstract getById(id: number): Observable<User>
    abstract delete(id: number): Observable<Boolean>
    abstract deleteAll(listId: number[]): Observable<Boolean>
}