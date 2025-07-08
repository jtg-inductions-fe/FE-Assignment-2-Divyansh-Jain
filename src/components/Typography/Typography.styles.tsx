import { styled, Typography } from '@mui/material';

export const StyledTypography = styled(Typography)(({ theme }) => ({
    width: '50px',
    ...theme.mixins.lineClamp(2),
}));
