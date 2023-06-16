import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// components
import { UserComponent } from './user/user.component';

// routes
import { routes } from './routes';

@NgModule({
  declarations: [UserComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class UsersModule {}
