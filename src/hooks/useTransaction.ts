import { useContext } from 'react';

import { TransactionContext } from '@context';

export function useTransaction() {
    return useContext(TransactionContext);
}
