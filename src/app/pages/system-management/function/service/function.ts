import { Observable } from "rxjs";
import { BaseObject } from "src/app/@core/interface/baseObject";
import { TableData } from "src/app/@core/interface/TableData";

export interface Function {
    id: number;
    menuName?: string;
    menuCode?: string;
    actionCode?: string;
    description?: string;
    parentCode?: number;
    isChecked?: Boolean;
}


export abstract class FunctionData {
    abstract paging(pageNumber: number, pageSize: number, txtSearch: string): Observable<TableData<Function>>
    abstract add(item: Function): Observable<Function>
    abstract update(item: Function): Observable<Function>
    abstract getById(id: number): Observable<Function>
    abstract delete(id: number): Observable<Boolean>
    abstract deleteAll(listId: number[]): Observable<Boolean>
}
