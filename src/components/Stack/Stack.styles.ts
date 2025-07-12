import { Stack, styled } from '@mui/material';

import { StyledStackProps } from './Stack.types';

export const StyledStack = styled(Stack)<StyledStackProps>(
    ({ backgroundColor }) => ({
        backgroundColor,
    }),
);
