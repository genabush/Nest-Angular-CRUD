import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// services
import { AuthService, ProductsService, UserService } from './services';

@NgModule({
  imports: [CommonModule],
  providers: [UserService, AuthService, ProductsService],
})
export class CoreModule {}
