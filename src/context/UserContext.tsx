import { createContext } from 'react';

import { User } from '@types';

export const userContext = createContext<{ user: User } | null>(null);

export const UserContextProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => <userContext.Provider value={null}>{children}</userContext.Provider>;
