export interface TableData<T> {
    content: T[];
    totalElements: number;
    totalPages: number;
    size: number;
}