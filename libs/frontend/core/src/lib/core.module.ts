import { NgModule, isDevMode } from '@angular/core';
import { CommonModule } from '@angular/common';

// '@ngrx
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

// services
import { AuthService, ProductsService, UserService } from './services';

// reducers
import { appStateReducer } from './store/index';

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forRoot([]),
    StoreModule.forRoot(appStateReducer),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: !isDevMode(),
      autoPause: true,
      trace: false,
      traceLimit: 75,
    }),
  ],
  providers: [UserService, AuthService, ProductsService],
})
export class CoreModule {}
