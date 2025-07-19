import { SalesContext } from '@context';

import salesData from './Sales.data.json';

export const SalesProvider = ({ children }: { children: React.ReactNode }) => (
    <SalesContext.Provider value={{ data: salesData.data }}>
        {children}
    </SalesContext.Provider>
);
