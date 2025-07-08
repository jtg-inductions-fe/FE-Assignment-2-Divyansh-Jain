import { useContext } from 'react';

import { CustomerContext } from '@context';

export function useCustomer() {
    return useContext(CustomerContext);
}
