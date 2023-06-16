import { User } from '@mono/shared';

// ngrx
import { createReducer } from '@ngrx/store';

export const userFeatureKey = 'user';

export interface UserState {
  user: User;
}

export const initialUserState: UserState = {
  user: {},
};

export const userReducer = createReducer(initialUserState);
