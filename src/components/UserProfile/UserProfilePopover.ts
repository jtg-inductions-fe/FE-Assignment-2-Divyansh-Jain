import { paperClasses, Popover, styled } from '@mui/material';

/** Custom  Popover for UserProfile */
export const UserProfilePopover = styled(Popover)(({ theme: { spacing } }) => ({
    [`& .${paperClasses.root}`]: {
        marginTop: spacing(8),
        borderRadius: spacing(3),
    },
}));
