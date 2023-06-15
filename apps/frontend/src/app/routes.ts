import { Routes } from '@angular/router';

// guards
import { AuthGuard } from '@frontend/core';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    loadChildren: () => import('@frontend/auth').then((m) => m.AuthModule),
  },

  {
    path: 'user',
    loadChildren: () => import('@frontend/users').then((m) => m.UsersModule),
  },
  {
    path: 'products',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('@frontend/products').then((m) => m.ProductsModule),
  },
  {
    path: '**',
    loadChildren: () =>
      import('@frontend/page-not-found').then((m) => m.PageNotFoundModule),
  },
];
