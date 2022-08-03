import { createReducer, on, Action } from '@ngrx/store';

import {
    LoggedUser,
    Errors
} from '../../pages-interfaces';

import {
    // Users
    initgetCurrentUser,
    getCurrentUser,
    getCurrentUserSuccess,
    getCurrentUserError,
    logoutCurrentUser,
    CleanErrorMessages
} from '../actions';


export interface UserState {
    loading: boolean;
    logginUser: LoggedUser;
    errors: Errors;
}


export const UserInitialState: UserState = {
    loading: false,
    logginUser: {
        id: 0,
        username:  '',
        first_name: '',
        last_name: '',
        email: '',
        is_superuser:  false,
        date_joined:  ''
    },
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

const _userReducers = createReducer(UserInitialState, 
    on(initgetCurrentUser, (state) => ({
        ...state,
        loading: true,
    })),
    on(getCurrentUser, (state, {user}) => ({
        ...state,
        logginUser: user,
        loading: true,
    })),
    on(getCurrentUserSuccess, (state) => ({
        ...state,
        loading: false,
    })),
    on(getCurrentUserError, (state, {error}) => ({
        ...state,
        errors: error,
        loading: false,
    })),
    on(logoutCurrentUser, (state) => ({
        ...state,
        logginUser: {
            id: 0,
            username:  '',
            first_name: '',
            last_name: '',
            email: '',
            is_superuser:  false,
            date_joined:  ''
        }
    })),
    on(CleanErrorMessages, (state) => ({
        ...state,
        errors: {...state.errors, error: {detail: '', username: []}}
    })),
)

export function UserReducer(state: UserState | undefined, action: Action) {
    return _userReducers(state, action);
}
  