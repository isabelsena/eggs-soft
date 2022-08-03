import { createReducer, on, Action } from '@ngrx/store';

import {
    Product,
    Errors
} from '../../pages-interfaces';

import {
    // Users
    initgetallProduct,
    getAllProduct,
    getAllProductSuccess,
    getAllProductError,
    CleanErrorMessages
} from '../actions';


export interface ProductState {
    loading: boolean;
    products: Product[];
    errors: Errors;
}


export const ProductInitialState: ProductState = {
    loading: false,
    products: [],
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

const _ProductReducers = createReducer(ProductInitialState, 
    on(initgetallProduct, (state) => ({
        ...state,
        loading: true,
    })),
    on(getAllProduct, (state, {products}) => ({
        ...state,
        products: [...products],
        loading: true,
    })),
    on(getAllProductSuccess, (state) => ({
        ...state,
        loading: false,
    })),
    on(getAllProductError, (state, {error}) => ({
        ...state,
        errors: error,
        loading: false,
    })),
    on(CleanErrorMessages, (state) => ({
        ...state,
        errors: {...state.errors, error: {detail: '', username: []}}
    })),
)

export function ProductReducer(state: ProductState | undefined, action: Action) {
    return _ProductReducers(state, action);
}
  