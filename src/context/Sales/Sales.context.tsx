import { createContext } from 'react';

import { Sales } from './Sales.types';

export const SalesContext = createContext<{ data: Sales[] } | null>(null);
