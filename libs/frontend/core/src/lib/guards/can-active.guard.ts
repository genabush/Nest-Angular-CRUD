import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  createUrlTreeFromSnapshot,
} from '@angular/router';

// rxjs
import { map } from 'rxjs';

// services
import { AuthService } from '../services';

export const AuthGuard = (next: ActivatedRouteSnapshot) => {
  const route = createUrlTreeFromSnapshot(next, ['/auth', 'login']);
  return inject(AuthService).user$.pipe(
    map((user) => {
      if (!user) {
        return route;
      }
      return user.token ? true : route;
    })
  );
};
