import { paperClasses, Popover, styled } from '@mui/material';

/** Custom  Popover for UserProfile */
export const StyledPopover = styled(Popover)(
    ({
        theme: {
            spacing,
            typography: { pxToRem },
        },
    }) => ({
        [`& .${paperClasses.root}`]: {
            marginTop: spacing(8),
            borderRadius: pxToRem(12),
        },
    }),
);
