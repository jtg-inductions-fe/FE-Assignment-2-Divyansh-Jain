import { IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';

import { StyledIconButtonProps } from './IconButton.types';

export const StyledIconButton = styled(IconButton, {
    shouldForwardProp: (prop) => prop !== 'elevated' && prop !== 'customColor',
})<StyledIconButtonProps>(
    ({ theme, shape, elevated, padding = 'auto', customColor, color }) => ({
        borderRadius: shape === 'circle' ? '50%' : theme.shape.borderRadius,
        boxShadow: elevated ? theme.shadows[10] : 'none',
        padding: typeof padding === 'number' ? theme.spacing(padding) : padding,
        color: customColor || color,
    }),
);
