import { Observable } from "rxjs";
import { BaseObject } from "src/app/@core/interface/baseObject";
import { TableData } from "src/app/@core/interface/TableData";

export interface Department extends BaseObject {
    id: number;
    name?: string;
    code?: string;
    description?: string;
    note?: string;
    isChecked?: Boolean;
}

export abstract class DepartmentData {
    abstract paging(pageNumber: number, pageSize: number, txtSearch: string): Observable<TableData<Department>>
    abstract add(item: Department): Observable<Department>
    abstract update(item: Department): Observable<Department>
    abstract getById(id: number): Observable<Department>
    abstract delete(id: number): Observable<Boolean>
    abstract deleteAll(listId: number[]): Observable<Boolean>
}
