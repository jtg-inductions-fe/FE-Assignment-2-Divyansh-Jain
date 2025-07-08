import { CircularProgress, styled } from '@mui/material';

export const StyledLoader = styled(CircularProgress)(
    ({
        theme: {
            palette: {
                text: { primary },
            },
        },
    }) => ({
        color: primary,
    }),
);
