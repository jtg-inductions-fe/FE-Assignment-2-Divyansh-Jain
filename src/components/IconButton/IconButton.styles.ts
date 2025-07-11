import { IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';

import { StyledIconButtonProps } from './IconButton.types';

export const StyledIconButton = styled(
    IconButton,
    {},
)<StyledIconButtonProps>(
    ({ theme, shape, elevated, padding = 'auto', customcolor, color }) => ({
        borderRadius: shape === 'circle' ? '50%' : theme.shape.borderRadius,
        boxShadow: elevated ? theme.shadows[10] : 'none',
        padding: typeof padding === 'number' ? theme.spacing(padding) : padding,
        color: customcolor || color,
    }),
);
