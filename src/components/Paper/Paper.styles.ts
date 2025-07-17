import { Paper, PaperProps, styled } from '@mui/material';

export const StyledPaper = styled(Paper)<PaperProps>(
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
