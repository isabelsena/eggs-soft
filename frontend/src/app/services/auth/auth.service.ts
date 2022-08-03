import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

// Helper de autenticacion
import { JwtHelperService } from '@auth0/angular-jwt';

// Local Storage Service
import { LocalStorageService } from '../localStorage.service';


@Injectable()
export class AuthService {
    constructor(
        private stg: LocalStorageService,
        private decode: JwtHelperService,
        private router: Router
    ) {}

    isAuthenticated(): boolean {
        const token = this.stg.get_token();
        const isTokenExpired = this.decode.isTokenExpired(token);
        return !isTokenExpired;
    }

    logOut(): void {
        this.stg.delete_token();
    }
}
