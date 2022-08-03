import { createAction, props } from '@ngrx/store';

import { Errors, Product } from '../../pages-interfaces';


// Product
export const initgetallProduct = createAction(
    '[Pages] Init Get All Products ',
    props<{token: string}>()
)

export const getAllProduct = createAction(
    '[Pages] Get All Products', 
    props<{products: Product[]}>()
)

export const getAllProductSuccess = createAction(
    '[Pages] Get All Product success', 
    // props<{Product: LoggedProduct}>()
)

export const getAllProductError = createAction(
    '[Pages] Get All Product error', 
    props<{error: Errors}>()
)
