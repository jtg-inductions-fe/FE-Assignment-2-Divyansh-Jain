import { Paper, styled } from '@mui/material';

import { StyledPaperProps } from './Paper.types';

export const StyledPaper = styled(Paper)<StyledPaperProps>(
    ({
        theme: {
            spacing,
            typography: { pxToRem },
        },
    }) => ({
        borderRadius: pxToRem(16),
        padding: spacing(6),
    }),
);
