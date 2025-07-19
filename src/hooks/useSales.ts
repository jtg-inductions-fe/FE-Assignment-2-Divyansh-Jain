import { useContext } from 'react';

import { SalesContext } from '@context';

export function useSales() {
    return useContext(SalesContext);
}
