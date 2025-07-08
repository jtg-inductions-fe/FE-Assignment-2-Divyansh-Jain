import { styled, Typography } from '@mui/material';

interface MyTypographyProps {
    lines?: number;
}

export const StyledTypography = styled(Typography, {
    shouldForwardProp: (prop) => prop !== 'lines',
})<MyTypographyProps>(({ lines, theme }) => {
    if (lines == undefined) {
        return;
    }
    return {
        ...theme.mixins.lineClamp(lines),
    };
});
