import { StyledButton } from './Button.styles';
import { StyledButtonProps } from './Button.types';

export const Button = ({ children, ...otherProps }: StyledButtonProps) => (
    <StyledButton {...otherProps}>{children}</StyledButton>
);
