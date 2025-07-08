import { createContext } from 'react';

import { User } from './User.types';

export const UserContext = createContext<{ user: User } | null>(null);
