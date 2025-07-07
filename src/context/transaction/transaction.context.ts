import { createContext } from 'react';

import { Transaction } from './transaction.types';

export const transactionContext = createContext<{
    transactions: Transaction[];
} | null>(null);
