import { ListItemButton, styled } from '@mui/material';

export const StyledListItemButton = styled(ListItemButton)(
    ({
        theme: {
            palette: { primary },
        },
    }) => ({
        '&.active': {
            color: primary.main,
        },
    }),
);
