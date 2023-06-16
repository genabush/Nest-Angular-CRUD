// ngrx
import { ActionReducerMap } from '@ngrx/store';

import * as fromUser from './user';
import * as fromProducts from './products';
import * as fromAuth from './auth';

export interface AppState {
  [fromProducts.productsFeatureKey]: fromProducts.ProductsState;
  [fromUser.userFeatureKey]: fromUser.UserState;
  [fromAuth.authFeatureKey]: fromAuth.AuthState;
}

export const appStateReducer: ActionReducerMap<AppState> = {
  [fromProducts.productsFeatureKey]: fromProducts.productsReducer,
  [fromUser.userFeatureKey]: fromUser.userReducer,
  [fromAuth.authFeatureKey]: fromAuth.authReducer,
};

export * from './auth';
export * from './products';
export * from './user';
