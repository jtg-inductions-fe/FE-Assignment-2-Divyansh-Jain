import { CustomerContext } from 'context';

export const CustomerContextProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => (
    <CustomerContext.Provider value={null}>{children}</CustomerContext.Provider>
);
