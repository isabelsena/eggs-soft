import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {

    constructor() {}

    set_token(token: string) {
        localStorage.setItem('token', JSON.stringify(token));
    }

    get_token() {
        if (localStorage.getItem('token') !== null) {
            return JSON.parse(localStorage.getItem('token') || '');
        }
    }

    delete_token() {
        localStorage.removeItem('token');
    }

    set_item(item_name: string, item: any) {
        localStorage.setItem(item_name, JSON.stringify(item));
    }

    get_item(item_name: string) {
        return JSON.parse(localStorage.getItem(item_name) || '');
    }

    delete_item(item_name: string) {
        localStorage.removeItem(item_name);
    }

}
