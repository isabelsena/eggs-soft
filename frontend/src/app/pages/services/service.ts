import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// Interfaces
import { 
    LoggedUser, 
    ProductResponse
} from '../pages-interfaces';

// Environment
import { environment } from 'src/environments/environment';


@Injectable()
export class PagesService {

    apiUrl: string = environment.apiUrl + 'api/';

    constructor(
        private http: HttpClient
    ) {}

    currentUser(token: string) {
        const url = this.apiUrl + 'v1/current_user/';
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        });
        return this.http.get<LoggedUser>(url, {headers: headers})
    }

    getAllProducts(token: string) {
        const url = this.apiUrl + 'v1/product/';
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        });
        return this.http.get<ProductResponse>(url, {headers: headers})
    }
}
