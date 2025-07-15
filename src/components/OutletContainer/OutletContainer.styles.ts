import { Box, styled } from '@mui/material';

export const StyledOutletContainer = styled(Box)(
    ({
        theme: {
            breakpoints,
            typography: { pxToRem },
        },
    }) => ({
        margin: 0,
        height: '100%',
        width: '100%',

        [breakpoints.up('xs')]: {
            paddingTop: pxToRem(64),
            paddingLeft: 0,
        },

        [breakpoints.up('md')]: {
            paddingTop: pxToRem(70),
            paddingLeft: '22%',
        },
    }),
);
