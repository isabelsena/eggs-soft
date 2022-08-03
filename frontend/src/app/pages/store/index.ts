import { ActionReducerMap } from '@ngrx/store';
import * as reducers from './reducers';

export interface ModuleState {
    user:  reducers.UserState
    product: reducers.ProductState
}

export const ModuleReducers: ActionReducerMap<ModuleState> = {
    user: reducers.UserReducer,
    product: reducers.ProductReducer
}
