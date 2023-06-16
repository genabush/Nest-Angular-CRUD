// ngrx
import { createReducer, on } from '@ngrx/store';

//  interfaces,enums
import { Auth, Status } from '@mono/shared';

// actions
import { authActions } from './actions';

export const authFeatureKey = 'auth';

export interface AuthState {
  auth: Auth;
}

export const initialAuthState: AuthState = {
  auth: {
    status: Status.EMPTY,
  },
};

export const authReducer = createReducer(
  initialAuthState,
  on(authActions.signUpSuccess, (state, action) => ({
    ...state,
    status: true,
  }))
  // on(authActions.signUpFailure, (state, action) => ({
  //   ...state,
  //   action,
  // })),
  // on(authActions.loginSuccess, (state, action) => ({
  //   ...state,
  //   action,
  // })),
  // on(authActions.loginFailure, (state, action) => ({
  //   ...state,
  //   action,
  // })),
  // on(authActions.loginSuccess, (state, action) => ({
  //   ...state,
  //   action,
  // })),
  // on(authActions.loginFailure, (state, action) => ({
  //   ...state,
  //   action,
  // }))
);
