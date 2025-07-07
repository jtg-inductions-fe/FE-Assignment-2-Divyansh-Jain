import { Box, CircularProgress, styled } from '@mui/material';

const StyledCircularProgress = styled(CircularProgress)(() => ({}));

export const Spinner = () => (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <StyledCircularProgress color="info" />
    </Box>
);
