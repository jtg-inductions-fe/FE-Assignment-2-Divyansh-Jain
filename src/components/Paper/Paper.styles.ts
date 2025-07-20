import { Paper, PaperProps, styled } from '@mui/material';

export const StyledPaper = styled(Paper)<PaperProps>(
    ({
        theme: {
            spacing,
            typography: { pxToRem },
            breakpoints,
        },
    }) => ({
        borderRadius: pxToRem(16),
        padding: spacing(4),
        [breakpoints.up('md')]: {
            padding: spacing(6),
        },
    }),
);
