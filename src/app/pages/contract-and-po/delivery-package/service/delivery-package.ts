import { Observable } from "rxjs";
import { BaseObject } from "src/app/@core/interface/baseObject";
import { TableData } from "src/app/@core/interface/TableData";

export interface DeliveryPackage {
    id: number;
    poCode?: string;
    contractCode?: string;
    dpCode?: string;
    description?: string;
    value?: number;
    address?: string;
    provinceId?: number;
    dpDate?: Date;
    note?: string;
}


export abstract class DeliveryPackageData {
    abstract paging(pageNumber: number, pageSize: number, txtSearch: string): Observable<TableData<DeliveryPackage>>
    abstract add(item: DeliveryPackage): Observable<DeliveryPackage>
    abstract update(item: DeliveryPackage): Observable<DeliveryPackage>
    abstract getById(id: number): Observable<DeliveryPackage>
    abstract delete(id: number): Observable<Boolean>
    abstract deleteAll(listId: number[]): Observable<Boolean>
}
