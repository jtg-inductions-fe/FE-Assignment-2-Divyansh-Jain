import { AvatarProps } from '@mui/material';

export type StyledAvatarProps = AvatarProps & {
    /** Height of the Avatar (e.g., 40, '2rem') */
    height?: string | number;
    /** Width of the Avatar (e.g., 40, '2rem') */
    width?: string | number;
};
