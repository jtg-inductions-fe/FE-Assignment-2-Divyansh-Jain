import { createContext } from 'react';

import { Transaction } from '@types';

const initialState: { transactions: Transaction[] } = {
    transactions: [],
};

export const transactionContext = createContext<{
    transactions: Transaction[];
} | null>(null);

export const TransactionContextProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => (
    <transactionContext.Provider value={initialState}>
        {children}
    </transactionContext.Provider>
);
