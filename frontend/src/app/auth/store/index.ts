import { ActionReducerMap } from '@ngrx/store';
import * as reducers from './reducers';

export interface ModuleState {
    auth:  reducers.AuthState
}

export const ModuleReducers: ActionReducerMap<ModuleState> = {
    auth: reducers.AuthReducer
}
