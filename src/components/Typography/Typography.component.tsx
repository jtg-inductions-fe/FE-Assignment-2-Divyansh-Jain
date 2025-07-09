import { StyledTypography } from './Typography.styles';
import { StyledTypographyProps } from './Typography.types';

/**
 * Typography component with extended styling capabilities.
 *
 * Enhances MUI's Typography by supporting additional props like `lines`,
 * which allows content to be truncated after a specified number of lines
 * using CSS line-clamp.
 *
 *
 */
export const Typography = (props: StyledTypographyProps) => (
    <StyledTypography {...props}>{props.children}</StyledTypography>
);
