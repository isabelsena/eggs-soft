import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// Interfaces
import { 
    AuthUser,
    RegUser,
    RegUserResponse,
    TokenResponse 
} from '../auth-interfaces';

// Environment
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {

    apiUrl: string = environment.apiUrl + 'api/';

    constructor(
        private http: HttpClient
    ) {}

    auth(user: AuthUser): Observable<TokenResponse> {
        const data = JSON.stringify(user);
        const url = this.apiUrl + 'oauth/token/';
        const headers = new HttpHeaders({
            'Content-Type': 'application/json'
        });
        return this.http.post<TokenResponse>(url, data, {headers: headers})
    }

    register(user: RegUser) {
        const data = JSON.stringify(user);
        const url = this.apiUrl + 'v1/register/';
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
        });
        return this.http.post<RegUserResponse>(url, data, {headers: headers})
    }
}
