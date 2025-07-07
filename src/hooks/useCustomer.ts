import { useContext } from 'react';

import { customerContext } from 'context';

export function useCustomer() {
    return useContext(customerContext);
}
