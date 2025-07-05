import { Box, CircularProgress, styled } from '@mui/material';

import { COLORS } from '@constant';

const StyledCircularProgress = styled(CircularProgress)(() => ({
    color: COLORS.GRAY['700'],
}));

export const Spinner = () => (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <StyledCircularProgress color="info" />
    </Box>
);
