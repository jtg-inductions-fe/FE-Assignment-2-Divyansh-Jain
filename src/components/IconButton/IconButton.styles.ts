import { IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';

import { StyledIconButtonProps } from './IconButton.types';

export const StyledIconButton = styled(IconButton)<StyledIconButtonProps>(
    ({
        theme,
        circle,
        elevation,
        height = 'auto',
        width = 'auto',
        padding = 'auto',
        stringcolor,
        color,
    }) => ({
        borderRadius: circle ? '50%' : theme.shape.borderRadius,
        boxShadow: elevation ? theme.shadows[elevation] : 'none',
        minWidth: circle ? '30px' : undefined,
        width: typeof width === 'number' ? theme.spacing(width) : width,
        height: typeof height === 'number' ? theme.spacing(height) : height,
        padding: typeof padding === 'number' ? theme.spacing(padding) : padding,
        color: stringcolor ? stringcolor : color,
    }),
);
