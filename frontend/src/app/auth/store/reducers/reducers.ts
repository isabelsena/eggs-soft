import { createReducer, on, Action } from '@ngrx/store';

import {
    AuthUser,
    RegUser,
    RegUserResponse,
    TokenResponse,
    Errors
} from '../../auth-interfaces';

import {
    loginUser,
    loginUserSucccess,
    registerUser,
    registerUserSucccess,
    authUserFailed,
    CleanErrorMessages
} from '../actions';


export interface AuthState {
    authUser: AuthUser;
    regUser: RegUser;
    loading: boolean;
    regUserResponse: RegUserResponse;
    isLogin: boolean;
    authTokens: TokenResponse;
    errors: Errors;
}


export const AuthInitialState: AuthState = {
    authUser: {
        username: '',
        password: ''
    },
    regUser: {
        username: '',
        password: '',
        email: ''
    },
    loading: false,
    regUserResponse: {
        username:  '',
        email: '',

    },
    authTokens: {
        access: '',
        refresh: ''
    },
    isLogin: false,
    errors: {
        status: 0,
        statusText: '',
        url: '',
        ok: false,
        name: '',
        message: '',
        error: {
            detail: '',
            username: ['']
        }
    }
}

const _authReducers = createReducer(AuthInitialState, 
    on(loginUser, (state, {user}) => ({
        ...state,
        authUser: user,
        loading: true
    })),
    on(loginUserSucccess, (state, {token}) => ({
        ...state,
        authTokens: {...token},
        isLogin: true,
        loading: false
    })),
    on(registerUser, (state, {user}) => ({
        ...state,
        regUser: user,
        loading: true
    })),
    on(registerUserSucccess, (state, {user}) => ({
        ...state,
        regUserResponse: user,
        loading: true
    })),
    on(authUserFailed, (state, {error} ) => ({
        ...state,
        errors: {...error},
        isLogin: false,
        loading: false,
    })),
    on(CleanErrorMessages, (state) => ({
        ...state,
        errors: {...state.errors, error: {detail: '', username: []}}
    })),
)

export function AuthReducer(state: AuthState | undefined, action: Action) {
    return _authReducers(state, action);
}
  