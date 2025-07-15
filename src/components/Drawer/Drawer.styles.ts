import { Drawer, styled } from '@mui/material';
import { paperClasses } from '@mui/material';

export const StyledDrawer = styled(Drawer)(
    ({ theme: { breakpoints, spacing } }) => ({
        [breakpoints.down('lg')]: {
            width: '80%',
        },

        [breakpoints.up('md')]: {
            width: '22%',
        },

        [`.${paperClasses.root}`]: {
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
