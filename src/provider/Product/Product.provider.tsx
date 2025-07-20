import { ProductContext } from 'context';

import { products } from './Product.data.json';

export const ProductContextProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => (
    <ProductContext.Provider value={{ products }}>
        {children}
    </ProductContext.Provider>
);
