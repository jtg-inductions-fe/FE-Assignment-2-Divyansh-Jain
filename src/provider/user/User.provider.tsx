import { userContext } from 'context';

export const UserContextProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => <userContext.Provider value={null}>{children}</userContext.Provider>;
