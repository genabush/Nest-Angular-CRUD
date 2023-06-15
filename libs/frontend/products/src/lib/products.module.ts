import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ProductsComponent, routes, ProductComponent } from '..';

@NgModule({
  declarations: [ProductsComponent, ProductComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class ProductsModule {}
