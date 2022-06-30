import { Observable } from "rxjs";
import { BaseObject } from "src/app/@core/interface/baseObject";
import { TableData } from "src/app/@core/interface/TableData";

export interface PeriodOrder {
    id: number;
    poCode?: string;
    poNumber?: number;
    description?: string;
    value?: number;
    paymentContent?: string;
    bankGuarantee?: string;
    address?: string;
    poDate?: Date;
    timeLine?: Date;
    note?: string;
}


export abstract class PeriodOrderData {
    abstract paging(pageNumber: number, pageSize: number, txtSearch: string): Observable<TableData<PeriodOrder>>
    abstract add(item: PeriodOrder): Observable<PeriodOrder>
    abstract update(item: PeriodOrder): Observable<PeriodOrder>
    abstract getById(id: number): Observable<PeriodOrder>
    abstract delete(id: number): Observable<Boolean>
    abstract deleteAll(listId: number[]): Observable<Boolean>
}
