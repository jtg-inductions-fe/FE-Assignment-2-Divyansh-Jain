import { ResponsiveContainerProps } from 'recharts';

import { StyledResponsiveContainer } from './ResponsiveContainer.styles';

/**Recharts Responsive Container with Some additional styles applied */
export const ResponsiveContainer = ({
    children,
    ...otherProps
}: ResponsiveContainerProps) => (
    <StyledResponsiveContainer {...otherProps}>
        {children}
    </StyledResponsiveContainer>
);
