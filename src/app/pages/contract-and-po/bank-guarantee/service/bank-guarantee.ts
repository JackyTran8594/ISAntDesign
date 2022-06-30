import { Observable } from "rxjs";
import { BaseObject } from "src/app/@core/interface/baseObject";
import { TableData } from "src/app/@core/interface/TableData";

export interface BankGuarantee {
    id: number;
    poCode?: string;
    contactCode?: string;
    value?: number;
    note?: string;
    contract_id?: number;
}


export abstract class BankGuaranteeData {
    abstract paging(pageNumber: number, pageSize: number, txtSearch: string): Observable<TableData<BankGuarantee>>
    abstract add(item: BankGuarantee): Observable<BankGuarantee>
    abstract update(item: BankGuarantee): Observable<BankGuarantee>
    abstract getById(id: number): Observable<BankGuarantee>
    abstract delete(id: number): Observable<Boolean>
    abstract deleteAll(listId: number[]): Observable<Boolean>
}
