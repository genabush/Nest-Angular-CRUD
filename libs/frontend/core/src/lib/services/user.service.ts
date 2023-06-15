import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

//  rxjs
import { Observable } from 'rxjs';

@Injectable()
export class UserService {
  constructor(private readonly http: HttpClient) {}

  getUser(userId: string): Observable<any> {
    return this.http.get(`/user/${userId}`);
  }
}
