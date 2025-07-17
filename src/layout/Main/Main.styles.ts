import { Box, styled } from '@mui/material';

export const StyledBox = styled(Box)(({ theme: { breakpoints, spacing } }) => ({
    margin: 0,
    flexGrow: 1,
    height: '100vh',

    padding: spacing(0, 4),

    [breakpoints.up('xs')]: {
        paddingTop: spacing(20),
    },

    [breakpoints.up('md')]: {
        paddingTop: spacing(22),
    },
}));
