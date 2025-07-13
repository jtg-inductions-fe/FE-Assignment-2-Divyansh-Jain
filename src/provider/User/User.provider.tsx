import { UserContext } from 'context';

import user from './User.data.json';
export const UserContextProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>;
