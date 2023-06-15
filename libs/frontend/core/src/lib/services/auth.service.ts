import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// interfaces
import { User } from '@mono/shared';

// rxjs
import { BehaviorSubject, Observable, map } from 'rxjs';

@Injectable()
export class AuthService {
  user$ = new BehaviorSubject<User>(null as unknown as User);

  constructor(private readonly http: HttpClient) {}

  login(body: User): Observable<User> {
    return this.http.post<User>('', body).pipe(
      map((user) => {
        this.user$.next(user);
        return user;
      })
    );
  }

  signup(body: User): Observable<string> {
    return this.http.post<string>('', body);
  }

  logout(): Observable<string> {
    return this.http.get<string>('');
  }
}
