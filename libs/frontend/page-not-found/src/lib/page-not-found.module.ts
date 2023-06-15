import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PageNotFoundComponent, routes } from '..';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [PageNotFoundComponent],
})
export class PageNotFoundModule {}
