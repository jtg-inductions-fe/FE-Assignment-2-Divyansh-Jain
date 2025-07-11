import { paperClasses, Popover, styled } from '@mui/material';

import { typography } from '@theme/foundations';

const { pxToRem } = typography.typographyUtil;

/** Custom  Popover for UserProfile */
export const StyledPopover = styled(Popover)(({ theme: { spacing } }) => ({
    [`& .${paperClasses.root}`]: {
        marginTop: spacing(8),
        borderRadius: pxToRem(12),
    },
}));
