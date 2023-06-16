// ngrx
import { createFeatureSelector, createSelector } from '@ngrx/store';

// reducers
import { UserState, userFeatureKey } from './reducer';

export const selectUserState = createFeatureSelector<UserState>(userFeatureKey);

export const selectUser = createSelector(
  selectUserState,
  (state: UserState) => state.user
);
