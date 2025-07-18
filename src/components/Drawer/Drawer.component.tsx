import { DrawerProps } from '@mui/material';

import { StyledDrawer } from './Drawer.styles';

/**
 * A customized version of MUI's `Drawer` component with additional styles applied.
 *
 */
export const Drawer = ({ children, ...otherProps }: DrawerProps) => (
    <StyledDrawer {...otherProps}>{children}</StyledDrawer>
);
