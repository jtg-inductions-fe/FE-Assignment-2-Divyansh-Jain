import { UserContext } from 'context';

export const UserContextProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => <UserContext.Provider value={null}>{children}</UserContext.Provider>;
