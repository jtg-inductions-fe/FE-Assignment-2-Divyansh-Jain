import { Stack } from '@mui/material';

import { StyledLoader } from './Loader.styles';

export const Loader = () => (
    <Stack justifyContent="center" direction="row">
        <StyledLoader color="info" />
    </Stack>
);
