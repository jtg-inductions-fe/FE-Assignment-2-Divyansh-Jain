import { createContext } from 'react';

import { Product } from './product.types';
export const productContext = createContext<{ products: Product[] } | null>(
    null,
);
