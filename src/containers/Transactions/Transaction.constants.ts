import { ChipPropsColorOverrides } from '@mui/material';
import { OverridableStringUnion } from '@mui/types';

import { TransactionStatus } from '@context';

export const STATUS_COLOR_MAP: Record<
    TransactionStatus,
    OverridableStringUnion<
        | 'default'
        | 'primary'
        | 'secondary'
        | 'error'
        | 'info'
        | 'success'
        | 'warning',
        ChipPropsColorOverrides
    >
> = {
    CANCELLED: 'error',
    COMPLETED: 'success',
    'IN PROGRESS': 'info',
};
