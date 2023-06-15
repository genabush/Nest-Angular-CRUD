import { Component } from '@angular/core';

// rxjs
import { Observable } from 'rxjs';

// interfaces
import { Product } from '@mono/shared';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
})
export class ProductsComponent {
  products$!: Observable<Product[]>;

  constructor() {}
}
