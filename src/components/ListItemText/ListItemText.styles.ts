import { ListItemText, styled } from '@mui/material';

export const StyledListItemText = styled(ListItemText)(({ color }) => ({
    color: color || 'inherit',
}));
