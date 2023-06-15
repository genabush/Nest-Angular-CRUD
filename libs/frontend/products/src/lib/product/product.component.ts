import { Component, Input } from '@angular/core';

// interfaces
import { Product } from '@mono/shared';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
})
export class ProductComponent {
  @Input() product!: Product;
}
