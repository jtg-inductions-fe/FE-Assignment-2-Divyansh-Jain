import { ResponsiveContainer } from 'recharts';

import { styled } from '@mui/material';

export const StyledResponsiveContainer = styled(ResponsiveContainer)(() => ({
    ['& svg:hover, & svg:focus']: {
        outline: 'none',
    },
}));
