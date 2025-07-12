import { Drawer, styled } from '@mui/material';
import { paperClasses } from '@mui/material';

import { typography } from '@theme/foundations';

export const StyledDrawer = styled(Drawer)(({ theme: { breakpoints } }) => {
    const { pxToRem } = typography.typographyUtil;
    return {
        [`.${paperClasses.root}`]: {
            top: pxToRem(64),
            width: '80vw',
            [breakpoints.up('md')]: {
                top: pxToRem(70),
                width: '20vw',
            },
        },
    };
});
