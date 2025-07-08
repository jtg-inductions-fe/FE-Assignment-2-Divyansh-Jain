import { useContext } from 'react';

import { UserContext } from 'context';

export function useUser() {
    return useContext(UserContext);
}
