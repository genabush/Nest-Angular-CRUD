// interfaces
import { Auth, User } from '@mono/shared';

// ngrx
import { createActionGroup, emptyProps } from '@ngrx/store';

export const authActions = createActionGroup({
  source: 'Auth',
  events: {
    'Sign Up Start': (user: User) => user,
    'Sign Up Success': (auth: Auth) => auth,
    'Sign Up Failure': (error: Error) => error,

    'Login Start': (user: User) => user,
    'Login Success': (user: User) => user,
    'Login Failure': (error: Error) => error,

    'Logout Start': emptyProps(),
    'Logout Success': (auth: Auth) => auth,
    'Logout Failure': (error: Error) => error,
  },
});
