import { useContext } from 'react';

import { ProductContext } from 'context';

export function useProduct() {
    return useContext(ProductContext);
}
