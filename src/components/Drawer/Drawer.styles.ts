import { Drawer, styled } from '@mui/material';
import {paperClasses } from '@mui/material';

export const StyledDrawer = styled(Drawer)(
    ({
        theme: {
            breakpoints,
            spacing,
            typography: { pxToRem },
        },
    }) => ({
        [breakpoints.down('lg')]: {
            width: '80%',
        },

        [breakpoints.up('md')]: {
            width: '22%',
        },

        [`.${paperClasses.root}`]: {
            minWidth: pxToRem(250),
            [breakpoints.down('lg')]: {
                width: '80%',
                paddingTop: spacing(16),
            },
            [breakpoints.up('md')]: {
                width: '22%',
                paddingTop: spacing(18),
            },
        },
    }),
);
