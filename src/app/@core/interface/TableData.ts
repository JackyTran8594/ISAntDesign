export interface TableData<T> {
    content: T[];
    totalElement: number;
    totalPages: number;
    pageSize: number;
}