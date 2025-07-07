import { createContext } from 'react';

import { Customer } from './customer.types';
export const customerContext = createContext<{ customers: Customer[] } | null>(
    null,
);
