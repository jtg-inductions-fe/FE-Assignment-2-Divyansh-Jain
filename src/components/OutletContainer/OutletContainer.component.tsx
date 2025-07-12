import { StyledOutletContainer } from './OutletContainer.styles';

/**
 * A layout container used to position the `Outlet` component from React Router.
 *  serves as a placeholder for nested routed content.
 */
export const OutletContainer = ({
    children,
}: {
    children: React.ReactNode;
}) => <StyledOutletContainer>{children}</StyledOutletContainer>;
