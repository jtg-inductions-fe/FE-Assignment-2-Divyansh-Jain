import { ListItemIcon, styled } from '@mui/material';

export const StyledListItemIcon = styled(ListItemIcon)(({ color }) => ({
    color: color || 'inherit',
}));
