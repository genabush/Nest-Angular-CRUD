// ngrx
import { createReducer } from '@ngrx/store';

// interfaces
import { Product } from '@mono/shared';

export const productsFeatureKey = 'products';

export interface ProductsState {
  products: Product[];
}

export const initialProductsState: ProductsState = {
  products: [],
};

export const productsReducer = createReducer(initialProductsState);
