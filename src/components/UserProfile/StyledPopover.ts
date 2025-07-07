import { paperClasses, Popover, styled } from '@mui/material';
export const StyledPopover = styled(Popover)(({}) => ({
    [`& .${paperClasses.root}`]: {
        borderRadius: '12px',
        aspectRatio: 0.75,
    },
}));
