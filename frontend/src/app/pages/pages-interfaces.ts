export interface LoggedUser {
    id: number;
    username:  string;
    first_name: string;
    last_name: string;
    email: string;
    is_superuser:  boolean;
    date_joined:  string
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

export interface Product {
    id: number;
    codigo: number,
    nombre: string,
    precio: number,
    imagen: string
}

export interface ProductResponse {
    count:    number;
    next:     string;
    previous: string;
    results:  Product[];
}