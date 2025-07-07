import { useContext } from 'react';

import { transactionContext } from 'context';

export function useTransaction() {
    return useContext(transactionContext);
}
