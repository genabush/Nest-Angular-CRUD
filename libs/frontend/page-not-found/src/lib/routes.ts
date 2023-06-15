import { Routes } from '@angular/router';

// components
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
  {
    path: '',
    component: PageNotFoundComponent,
  },
];
