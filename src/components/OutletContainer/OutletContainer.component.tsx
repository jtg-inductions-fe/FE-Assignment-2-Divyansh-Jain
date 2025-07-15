import { StyledOutletContainer } from './OutletContainer.styles';
import { OutletContainerProps } from './OutletContainer.types';

/**
 * A layout container used to position the `Outlet` component from React Router.
 *  serves as a placeholder for nested routed content.
 */
export const OutletContainer = ({ children }: OutletContainerProps) => (
    <StyledOutletContainer>{children}</StyledOutletContainer>
);
