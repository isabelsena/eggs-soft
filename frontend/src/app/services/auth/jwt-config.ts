import {  JwtModuleOptions } from '@auth0/angular-jwt';
// Enviroments
import { environment } from 'src/environments/environment';

// JWT Config
export const JWTConfig: JwtModuleOptions = {
    config: {
      tokenGetter: token_getter,
      allowedDomains: [ environment.apiUrl + '/api/' ],
      disallowedRoutes: [
          environment.apiUrl + '/api/oauth/token/',
          environment.apiUrl + '/api/oauth/register/',
      ]
    }
}

export function token_getter() {
    if ((localStorage.getItem('token') !== null)) {
        return JSON.parse(localStorage.getItem('token') || '');
    }
}
