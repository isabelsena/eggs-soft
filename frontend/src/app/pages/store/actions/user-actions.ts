import { createAction, props } from '@ngrx/store';

import { LoggedUser, Errors } from '../../pages-interfaces';


export const initgetCurrentUser = createAction(
    '[Pages] Init Get Current User ',
    props<{token: string}>()
)

export const getCurrentUser = createAction(
    '[Pages] Get current user', 
    props<{user: LoggedUser}>()
)

export const getCurrentUserSuccess = createAction(
    '[Pages] Get current user success', 
    // props<{user: LoggedUser}>()
)

export const getCurrentUserError = createAction(
    '[Pages] Get current user error', 
    props<{error: Errors}>()
)

export const logoutCurrentUser = createAction(
    '[Pages] Get current user error'
)

export const CleanErrorMessages = createAction(
    '[Auth] Clean Error Messages',
)


