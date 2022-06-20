import { Observable } from "rxjs";
import { BaseObject } from "src/app/@core/interface/baseObject";
import { TableData } from "src/app/@core/interface/TableData";

export interface Role extends BaseObject {
    id?: number;
    name?: string;
    code?: string;
    description?: string;
}

export abstract class RoleData {
    abstract paging(pageNumber: number, pageSize: number, txtSearch: string): Observable<TableData<Role>>
    abstract add(item: Role): Observable<Role>
    abstract update(item: Role): Observable<Role>
    abstract getById(id: number): Observable<Role>
    abstract delete(id: number): Observable<Boolean>
    abstract deleteAll(listId: number[]): Observable<Boolean>
}
