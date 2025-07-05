import { createContext } from 'react';

import { Customer } from '@types';
export const customerContext = createContext<{ customers: Customer[] } | null>(
    null,
);

export const CustomerContextProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => (
    <customerContext.Provider value={null}>{children}</customerContext.Provider>
);
