import { transactionContext } from 'context';

export const TransactionContextProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => (
    <transactionContext.Provider value={null}>
        {children}
    </transactionContext.Provider>
);
