import { StyledTypography } from './Typography.styles';
import { StyledTypographyProps } from './Typography.types';

/**
 * Typography component with optional line clamping.
 *
 * @param props - Props to control typography styles, including:
 *   - `lines`: Number of lines after which content should be clipped.
 */

export const Typography = (props: StyledTypographyProps) => (
    <StyledTypography {...props}>{props.children}</StyledTypography>
);
