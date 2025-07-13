import { AvatarProps } from '@mui/material';

export type AvatarSize = 'sm' | 'md' | 'lg';

export type StyledAvatarProps = AvatarProps & {
    /**
     * Represents the size of avatar image e,g sm,md and lg
     */
    size?: AvatarSize;
};
