import { AvatarProps } from '@mui/material';

type AvatarSize = 'sm' | 'md' | 'lg';

export const sizeMap: Record<AvatarSize, number> = {
    sm: 32,
    md: 48,
    lg: 64,
};

export type StyledAvatarProps = AvatarProps & {
    /**
     * Represents the size of avatar image e,g sm,md and lg
     */
    size?: AvatarSize;
};
