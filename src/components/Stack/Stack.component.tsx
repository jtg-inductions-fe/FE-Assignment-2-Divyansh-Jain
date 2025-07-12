import { StyledStack } from './Stack.styles';
import { StyledStackProps } from './Stack.types';

/**Enhanced version of MUI's Stack component with backgroundColor support*/
export const Stack = ({ children, ...otherProps }: StyledStackProps) => (
    <StyledStack {...otherProps}>{children}</StyledStack>
);
