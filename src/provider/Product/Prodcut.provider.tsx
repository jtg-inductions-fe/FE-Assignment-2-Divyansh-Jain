import { ProductContext } from 'context';

export const ProductContextProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => (
    <ProductContext.Provider value={null}>{children}</ProductContext.Provider>
);
