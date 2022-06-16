import { Observable } from "rxjs";

export abstract class AuthData {
    abstract authenticate(data?: any): Observable<any>;
}