import { StyledDrawer } from './Drawer.styles';
import { StyledDrawerProps } from './Drawer.types';

/**
 * A customized version of MUI's `Drawer` component with additional styles applied.
 *
 */
export const Drawer = ({ children, ...otherProps }: StyledDrawerProps) => (
    <StyledDrawer {...otherProps}>{children}</StyledDrawer>
);
