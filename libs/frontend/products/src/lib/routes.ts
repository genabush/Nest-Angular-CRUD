import { Routes } from '@angular/router';

// components
import { ProductsComponent, ProductComponent } from '..';

export const routes: Routes = [
  {
    path: '',
    component: ProductsComponent,
  },
  {
    path: ':id',
    component: ProductComponent,
  },
];
