import { Drawer, styled } from '@mui/material';
import { paperClasses } from '@mui/material';

export const StyledDrawer = styled(Drawer)(
    ({
        theme: {
            breakpoints,
            typography: { pxToRem },
        },
    }) => ({
        [breakpoints.down('lg')]: {
            width: '80%',
        },

        [breakpoints.up('md')]: {
            width: '22%',
        },
        minWidth: pxToRem(250),

        [`.${paperClasses.root}`]: {
            minWidth: pxToRem(250),
            [breakpoints.down('lg')]: {
                width: '80%',
            },
            [breakpoints.up('md')]: {
                width: '22%',
            },
        },
    }),
);
