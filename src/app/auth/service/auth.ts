import { Observable } from "rxjs";

export interface AccessToken {
    accessToken: string;
    permission: string[];
    role: string[];
    success: boolean;
    tokenType?: string;
    tokenResponse?: string;
    username: string;

}

export abstract class AuthData {
    abstract authenticate(data?: any): Observable<any>;
}