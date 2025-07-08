import { TransactionContext } from 'context';

export const TransactionContextProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => (
    <TransactionContext.Provider value={null}>
        {children}
    </TransactionContext.Provider>
);
