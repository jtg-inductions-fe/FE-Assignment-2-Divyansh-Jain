import { Stack } from '@mui/material';

import { StyledLoader } from './Loader.styles';

/**
 * Loader component.
 *
 * Can be used as a fallback during loading states.
 */
export const Loader = () => (
    <Stack
        justifyContent="center"
        direction="row"
        height="100vh"
        alignItems="center"
    >
        <StyledLoader color="info" />
    </Stack>
);
