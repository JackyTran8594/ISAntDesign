export class MessageError {
    public isError: Boolean;
    public message: string;

    constructor() {
        this.isError = false;
        this.message = '';
    }

}

export enum ResponseError {
    E1 = 'Tài khoản/mật khẩu không đúng'
}