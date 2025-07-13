import { StyledListItemIcon } from './ListItemIcon.styles';
import { StyledListItemIconProps } from './ListItemIcon.types';

/**
 * A customized version of MUI's `ListItemIcon` component with `color="inherit"` set by default,
 * allowing it to inherit color from its parent for better theme consistency.
 */

export const ListItemIcon = ({
    children,
    ...otherProps
}: StyledListItemIconProps) => (
    <StyledListItemIcon {...otherProps}>{children}</StyledListItemIcon>
);
