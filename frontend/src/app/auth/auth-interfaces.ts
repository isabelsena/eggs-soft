export interface AuthUser {
    username: string
    password: string
}


export interface RegUser {
    username: string
    password: string
    email: string
}


export interface RegUserResponse {
    username: string
    email: string
}


export interface LoggedError{
    detail: string;
    username: string[];
}


export interface Errors {
    status: number;
    statusText: string;
    url: string;
    ok: boolean;
    name: string;
    message: string;
    error: LoggedError;
}


export interface TokenResponse {
    refresh: string;
    access: string
}
