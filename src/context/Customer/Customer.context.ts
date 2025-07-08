import { createContext } from 'react';

import { Customer } from './Customer.types';
export const CustomerContext = createContext<{ customers: Customer[] } | null>(
    null,
);
