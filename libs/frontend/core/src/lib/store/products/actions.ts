// interfaces
import { Product } from '@mono/shared';

// ngrx
import { createActionGroup, emptyProps } from '@ngrx/store';

export const productActions = createActionGroup({
  source: 'Product',
  events: {
    'Get Products Start': emptyProps(),
    'Get Products Success': (products: Product[]) => ({ products }),
    'Get Products Failure': (products: Product[]) => ({ products }),

    'Get Single Product Start': (productId: number) => ({ productId }),
    'Get Single Product Success': (product: Product) => product,
    'Get Single Product Failure': (error: Error) => error,
  },
});
