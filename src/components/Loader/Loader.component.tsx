import { Box } from '@mui/material';

import { StyledLoader } from './Loader.styles';

export const Loader = () => (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <StyledLoader color="info" />
    </Box>
);
