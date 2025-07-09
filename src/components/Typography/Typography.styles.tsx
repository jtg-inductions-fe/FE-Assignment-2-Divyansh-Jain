import { styled, Typography } from '@mui/material';

import { MyTypographyProps } from './Typography.types';

export const StyledTypography = styled(Typography)<MyTypographyProps>(({
    lines,
    theme: {
        mixins: { lineClamp },
    },
}) => {
    if (lines) {
        return lineClamp(lines);
    }
});
