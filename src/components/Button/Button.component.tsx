import { StyledButton } from './Button.styles';
import { StyledButtonProps } from './Button.types';

/** Enhanced Version of MUI's Button component with borderRadius support by using radius prop which takes string 1px, 1rem  */
export const Button = ({ children, ...otherProps }: StyledButtonProps) => (
    <StyledButton {...otherProps}>{children}</StyledButton>
);
