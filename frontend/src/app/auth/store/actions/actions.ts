import { createAction, props } from '@ngrx/store';

import { 
    RegUser,
    AuthUser,
    TokenResponse,
    Errors,
    RegUserResponse
} from '../../auth-interfaces';


// Login
export const loginUser = createAction(
    '[Auth] Login User', 
    props<{user: AuthUser}>()
)

export const loginUserSucccess = createAction(
    '[Auth] Login User Succcess', 
    props<{token: TokenResponse}>()
)

// Register
export const registerUser = createAction(
    '[Auth] Register User', 
    props<{user: RegUser}>()
)

export const registerUserSucccess = createAction(
    '[Auth] Register User Succcess',
    props<{user: RegUserResponse}>()
)

export const authUserFailed = createAction(
    '[Auth] Login User Failed', 
    props<{error: Errors}>()
)

export const CleanErrorMessages = createAction(
    '[Auth] Clean Error Messages',
)
