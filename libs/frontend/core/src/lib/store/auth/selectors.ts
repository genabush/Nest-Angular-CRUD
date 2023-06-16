// ngrx
import { createFeatureSelector, createSelector } from '@ngrx/store';

import { AuthState, authFeatureKey } from './reducer';

export const selectAuthState = createFeatureSelector<AuthState>(authFeatureKey);

export const selectAuth = createSelector(
  selectAuthState,
  (state: AuthState) => {
    state.auth;
  }
);
