import { useContext } from 'react';

import { productContext } from 'context';

export function useProduct() {
    return useContext(productContext);
}
