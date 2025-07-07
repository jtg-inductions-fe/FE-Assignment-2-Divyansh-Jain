import { productContext } from 'context';

export const ProductContextProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => (
    <productContext.Provider value={null}>{children}</productContext.Provider>
);
