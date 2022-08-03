import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Router } from '@angular/router'

// RXJS
import { mergeMap, map, catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';

// Actions
import * as pagesActions from '../actions';

// Service
import { PagesService } from '../../services';

// Interface
import { Errors } from '../../pages-interfaces';

@Injectable()
export class CoreEffects {

    constructor(
        private actions$: Actions,
        private pagesService: PagesService,
        // private router: Router
    ){}


    getCurrentUser$ = createEffect(
        () => this.actions$.pipe(
            ofType( pagesActions.initgetCurrentUser ),
            mergeMap(
                (action) => {
                    return this.pagesService.currentUser(action.token)
                        .pipe(
                            map((response) => pagesActions.getCurrentUser({ user: response })),
                            // tap((res) => localStorage.setItem('token', JSON.stringify(res.token.access))),
                            catchError((err: Errors) => of(pagesActions.getCurrentUserError({ error: err })))
                        );
                }
            )
        )
    )

    getAllProducts$ = createEffect(
        () => this.actions$.pipe(
            ofType( pagesActions.initgetallProduct ),
            mergeMap(
                (action) => {
                    return this.pagesService.getAllProducts(action.token)
                        .pipe(
                            map((response) => pagesActions.getAllProduct({products: response.results})),
                            // tap((res) => localStorage.setItem('token', JSON.stringify(res.token.access))),
                            catchError((err: Errors) => of(pagesActions.getAllProductError({ error: err })))
                        );
                }
            )
        )
    )
}
