import { StyledTypography } from './Typography.styles';

export const Typography = ({
    children,
    lines,
}: {
    children: React.ReactNode;
    lines: number;
}) => <StyledTypography lines={lines}>{children}</StyledTypography>;
