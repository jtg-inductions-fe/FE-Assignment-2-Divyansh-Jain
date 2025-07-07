import { createContext } from 'react';

import { User } from './User.types';

export const userContext = createContext<{ user: User } | null>(null);
