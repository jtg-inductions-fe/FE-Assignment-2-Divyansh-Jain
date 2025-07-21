import { Box, styled } from '@mui/material';

export const StyledBox = styled(Box)(
    ({
        theme: {
            breakpoints,
            spacing,
            typography: { pxToRem },
        },
    }) => ({
        margin: 0,
        flexGrow: 1,
        padding: spacing(0, 4),
        maxWidth: '100%',
        minHeight: '100vh',

        [breakpoints.up('xs')]: {
            paddingTop: spacing(20),
        },

        [breakpoints.up('md')]: {
            width: '75%',
            maxWidth: pxToRem(1600),
            paddingTop: spacing(22),
        },
    }),
);
