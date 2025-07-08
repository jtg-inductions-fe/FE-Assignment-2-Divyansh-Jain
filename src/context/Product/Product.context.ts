import { createContext } from 'react';

import { Product } from './Product.types';
export const ProductContext = createContext<{ products: Product[] } | null>(
    null,
);
