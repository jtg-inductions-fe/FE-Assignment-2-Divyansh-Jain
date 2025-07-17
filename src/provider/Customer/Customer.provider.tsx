import { CustomerContext } from 'context';

import { customers } from './Customer.data.json';
export const CustomerContextProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => (
    <CustomerContext.Provider value={{ customers }}>
        {children}
    </CustomerContext.Provider>
);
