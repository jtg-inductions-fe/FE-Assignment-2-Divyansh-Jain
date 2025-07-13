import { StyledListItemText } from './ListItemText.styles';
import { StyledListItemTextProps } from './ListItemText.types';

/**
 * A customized version of MUI's `ListItemText` component with `color="inherit"` set by default,
 * allowing it to inherit color from its parent for better theme consistency.
 */

export const ListItemText = ({
    children,
    ...otherProps
}: StyledListItemTextProps) => (
    <StyledListItemText {...otherProps}>{children}</StyledListItemText>
);
