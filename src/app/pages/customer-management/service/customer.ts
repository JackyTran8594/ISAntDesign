import { Observable } from "rxjs";
import { TableData } from "src/app/@core/interface/TableData";

export interface Customer {
    id?: number;
    code?: string;
    name?: string;
    address?: string;
    taxCode?: string;
    fax?: string;
    description?: string;
}


export abstract class CustomerData {
    abstract paging(pageNumber: number, pageSize: number, txtSearch: string): Observable<TableData<Customer>>
    abstract add(item: Customer): Observable<Customer>
    abstract update(item: Customer): Observable<Customer>
    abstract getById(id: number): Observable<Customer>
    abstract delete(id: number): Observable<Boolean>
    abstract deleteAll(listId: number[]): Observable<Boolean>
}