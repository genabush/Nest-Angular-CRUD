// ngrx
import { createFeatureSelector, createSelector } from '@ngrx/store';

// reducers
import { ProductsState, productsFeatureKey } from './reducer';

export const selectProductsState =
  createFeatureSelector<ProductsState>(productsFeatureKey);

export const selectProducts = createSelector(
  selectProductsState,
  (state: ProductsState) => state.products
);
