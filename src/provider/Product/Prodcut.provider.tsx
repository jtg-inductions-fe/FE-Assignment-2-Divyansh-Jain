import { ProductContext } from 'context';

import prodcuts from './Product.data.json';
export const ProductContextProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => (
    <ProductContext.Provider value={{ products: prodcuts }}>
        {children}
    </ProductContext.Provider>
);
