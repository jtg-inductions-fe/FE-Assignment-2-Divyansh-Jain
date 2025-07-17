import { StyledResponsiveContainer } from './ResponsiveContainer.styles';
import { StyledResponsiveContainerProps } from './ResponsiveContainer.types';

/**Recharts Responsive Container with Some additional styles applied */
export const ResponsiveContainer = ({
    children,
    ...otherProps
}: StyledResponsiveContainerProps) => (
    <StyledResponsiveContainer {...otherProps}>
        {children}
    </StyledResponsiveContainer>
);
