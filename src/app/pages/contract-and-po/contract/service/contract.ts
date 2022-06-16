import { Observable } from "rxjs";
import { TableData } from "src/app/@core/interface/TableData";

export interface Contract {
    id?: number;
    contractCode?: string;
    name?: string;
    description?: string;
    value?: number;
    paymentContent?: string;
    bankGuarantee?: string;
    customerId?: number;
    contractDate?: Date;
    timeLine?: Date;
    guarantee?: string;
    note?: string;
}

export abstract class ContractData {
    abstract paging(pageNumber: number, pageSize: number, txtSearch: string): Observable<TableData<Contract>>
    abstract add(item: Contract): Observable<Contract>
    abstract update(item: Contract): Observable<Contract>
    abstract getById(id: number): Observable<Contract>
    abstract delete(id: number): Observable<Boolean>
    abstract deleteAll(listId: number[]): Observable<Boolean>
}