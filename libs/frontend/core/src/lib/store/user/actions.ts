// ngrx
import { createActionGroup } from '@ngrx/store';

// interfaces
import { User } from '@mono/shared';

export const userActions = createActionGroup({
  source: 'User',
  events: {
    'Get User Start': (userId: number) => ({ userId }),
    'Get User Success': (user: User) => user,
    'Get User Failure': (error: Error) => error,
  },
});
