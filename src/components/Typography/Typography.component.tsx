import { StyledTypography } from './Typography.styles';
import { MyTypographyProps } from './Typography.types';

export const Typography = (props: MyTypographyProps) => (
    <StyledTypography {...props}>{props.children}</StyledTypography>
);
