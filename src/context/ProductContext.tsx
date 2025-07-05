import { createContext } from 'react';

import { Product } from '@types';
export const productContext = createContext<{ products: Product[] } | null>(
    null,
);

export const ProductContextProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => (
    <productContext.Provider value={null}>{children}</productContext.Provider>
);
