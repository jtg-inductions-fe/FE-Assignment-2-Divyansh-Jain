import { Box } from '@mui/material';

import { SpinnerStyled } from './Spinner.styles';

export const Spinner = () => (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <SpinnerStyled color="info" />
    </Box>
);
