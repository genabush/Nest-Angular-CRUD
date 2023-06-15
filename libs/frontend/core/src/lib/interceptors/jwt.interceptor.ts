import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';

// rxjs
import { Observable } from 'rxjs';

//  services
import { AuthService } from '../services';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private readonly authService: AuthService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // add auth header with jwt if account is logged in and request is to the api url
    const user = this.authService.user$.value;
    if (user.token) {
      request = request.clone({
        setHeaders: { Authorization: `Bearer ${user.token}` },
      });
    }

    return next.handle(request);
  }
}
