import { styled, Typography } from '@mui/material';

import { StyledTypographyProps } from './Typography.types';

export const StyledTypography = styled(Typography)<StyledTypographyProps>(({
    lines,
    theme: {
        mixins: { lineClamp },
    },
}) => {
    if (lines) {
        return lineClamp(lines);
    }
});
