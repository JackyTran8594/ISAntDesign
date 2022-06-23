import { Observable } from "rxjs";
import { BaseObject } from "src/app/@core/interface/baseObject";
import { TableData } from "src/app/@core/interface/TableData";

export interface Customer {
    id: number;
    code?: string;
    name?: string;
    address?: string;
    taxCode?: string;
    fax?: string;
    phone?: string;
    description?: string;
    createdBy?:string;
    createdDate?:Date;
    lastModifiedBy?:string;
    lastModifiedDate?:Date;
    status?:string;
    isChecked?: Boolean;
}


export abstract class CustomerData {
    abstract paging(pageNumber: number, pageSize: number, txtSearch: string): Observable<TableData<Customer>>
    abstract add(item: Customer): Observable<Customer>
    abstract update(item: Customer): Observable<Customer>
    abstract getById(id: number): Observable<Customer>
    abstract delete(id: number): Observable<Boolean>
    abstract deleteAll(listId: number[]): Observable<Boolean>
}