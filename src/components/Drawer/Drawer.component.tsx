import { StyledDrawer } from './Drawer.styles';
import { StyledDrawerProps } from './Drawer.types';

export const Drawer = ({ children, ...otherProps }: StyledDrawerProps) => (
    <StyledDrawer {...otherProps}>{children}</StyledDrawer>
);
