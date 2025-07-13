import { Stack } from '@mui/material';

import { StyledLoader } from './Loader.styles';

/**
 * Loader component.
 *
 * Can be used as a fallback during loading states.
 */
export const Loader = () => (
    <Stack justifyContent="center" direction="row">
        <StyledLoader color="info" />
    </Stack>
);
