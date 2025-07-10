import { paperClasses, Popover, styled } from '@mui/material';
export const UserProfilePopover = styled(Popover)(({}) => ({
    [`& .${paperClasses.root}`]: {
        borderRadius: '12px',
        aspectRatio: 0.75,
    },
}));
