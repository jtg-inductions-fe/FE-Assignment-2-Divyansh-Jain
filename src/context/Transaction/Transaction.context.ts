import { createContext } from 'react';

import { Transaction } from './Transaction.types';

export const TransactionContext = createContext<{
    transactions: Transaction[];
} | null>(null);
