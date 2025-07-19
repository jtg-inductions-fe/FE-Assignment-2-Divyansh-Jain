import { Transaction, TransactionContext } from 'context';

import transactionsData from './Transaction.data.json';

export const TransactionContextProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => (
    <TransactionContext.Provider
        value={{ transactions: transactionsData.transactions as Transaction[] }}
    >
        {children}
    </TransactionContext.Provider>
);
