import { Observable } from "rxjs";
import { BaseObject } from "src/app/@core/interface/baseObject";
import { TableData } from "src/app/@core/interface/TableData";

export interface PackingList {
    id: number;
    plCode?: string;
    dpCode?: string;
    description?: string;
    address?: string;
    plDate?: Date;
    note?: string;
    isChecked?: Boolean;
}


export abstract class PackingListData {
    abstract paging(pageNumber: number, pageSize: number, txtSearch: string): Observable<TableData<PackingList>>
    abstract add(item: PackingList): Observable<PackingList>
    abstract update(item: PackingList): Observable<PackingList>
    abstract getById(id: number): Observable<PackingList>
    abstract delete(id: number): Observable<Boolean>
    abstract deleteAll(listId: number[]): Observable<Boolean>
}
