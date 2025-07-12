import { StyledListItemIcon } from './ListItemIcon.styles';
import { StyledListItemIconProps } from './ListItemIcon.types';

export const ListItemIcon = ({
    children,
    ...otherProps
}: StyledListItemIconProps) => (
    <StyledListItemIcon {...otherProps}>{children}</StyledListItemIcon>
);
