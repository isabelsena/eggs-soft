import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Router } from '@angular/router'

// RXJS
import { mergeMap, map, catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';

// Actions
import * as authActions from '../actions';

// Service
import { AuthService } from '../../services';

// Interface
import { Errors } from '../../auth-interfaces'

@Injectable()
export class AuthEffects {

    constructor(
        private actions$: Actions,
        private authService: AuthService,
        private router: Router
    ){}


    Login$ = createEffect(
        () => this.actions$.pipe(
            ofType( authActions.loginUser ),
            mergeMap(
                (action) => {
                    return this.authService.auth(action.user)
                        .pipe(
                            map((response) => authActions.loginUserSucccess({ token: response })),
                            tap((res) => localStorage.setItem('token', JSON.stringify(res.token.access))),
                            tap(() => this.router.navigate(['/pages/home'])),
                            catchError((err: Errors) => of(authActions.authUserFailed({ error: err })))
                        );
                }
            )
        )
    )

    Register$ = createEffect(
        () => this.actions$.pipe(
            ofType( authActions.registerUser ),
            mergeMap(
                (action) => {
                    return this.authService.register(action.user)
                        .pipe(
                            map((response) => authActions.registerUserSucccess({user: response})),
                            tap(() => this.router.navigate(['/login'])),
                            catchError((err: Errors) => of(authActions.authUserFailed({ error: err })))
                        );
                }
            )
        )
    )

}
