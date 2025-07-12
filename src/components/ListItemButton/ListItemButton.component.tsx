import { StyledListItemButton } from './ListItemButton.styles';
import { StyledListItemButtonProps } from './ListItemButton.types';

/**
 * An enhanced version of MUI's `ListItemButton` with integrated `NavLink` styling support,
 * enabling active route styling for navigation items.
 */
export const ListItemButton = ({
    children,
    ...otherProps
}: StyledListItemButtonProps) => (
    <StyledListItemButton {...otherProps}>{children}</StyledListItemButton>
);
