import { Component } from '@angular/core';

// rxjs
import { Observable } from 'rxjs';

// interfaces
import { User } from '@mono/shared';

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
})
export class UserComponent {
  user$!: Observable<User>;
}
